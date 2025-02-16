import axios from "axios";
import fs from "fs";
import { Bot } from "grammy";
import path from "path";
// import { search } from "./search-tavily";
import { search } from "./search-gemini";
import { tts } from "./text-to-speech";
import { getTranscription } from "./voice-to-text";

const bot = new Bot(process.env.TG_TOKEN!);

const uploadsDir = path.join(process.cwd(), "src", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

bot.on("message:voice", async (ctx) => {
  const voice = ctx.message.voice;

  const file = await ctx.api.getFile(voice.file_id);
  if (!file.file_path) {
    await ctx.reply("Couldn't get the file path");
    return;
  }

  const fileName = `voice-${file.file_id}.oga`;
  const filePath = path.join(uploadsDir, fileName);

  const fileUrl = `https://api.telegram.org/file/bot${process.env.TG_TOKEN}/${file.file_path}`;

  const response = await axios({
    method: "GET",
    url: fileUrl,
    responseType: "stream",
  });

  const writer = fs.createWriteStream(filePath);

  response.data.pipe(writer);

  await new Promise<void>((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });

  const transcript = await getTranscription(filePath);
  const answer = await search(transcript);

  const result = `q: ${transcript}\n\na: ${answer}`;
  console.log("Result:", result);

  const answerAudio = await tts(answer);

  fs.unlinkSync(filePath);

  await ctx.replyWithAudio(answerAudio);
});

bot.start();

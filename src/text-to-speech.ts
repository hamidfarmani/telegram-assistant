import { ElevenLabsClient } from "elevenlabs";
import { InputFile } from "grammy";

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY!,
});

export async function tts(text: string) {
  const response = await client.generate({
    text,
    voice: "Aria",
    model_id: "eleven_turbo_v2_5",
    output_format: "mp3_22050_32",
  });

  return new InputFile(response);
}

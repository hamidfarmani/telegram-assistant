import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite-preview-02-05",
  systemInstruction:
    "answer to the user's question and do not provide any additional information",
});

export async function search(query: string) {
  const response = await model.generateContent(query);
  console.log("Response:", response);

  if (!response.response.candidates) {
    throw new Error("No candidates found in the response.");
  }
  return response.response.candidates[0].content.parts
    .map((part) => part.text)
    .join("\n");
}

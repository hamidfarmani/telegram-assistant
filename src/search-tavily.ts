const { tavily } = require("@tavily/core");

const client = tavily({ apiKey: process.env.TAVILY_API_KEY });

export async function search(query: string) {
  const result = await client.search(query, {
    includeAnswer: true,
  });

  console.log("Result: ", result);

  return result.answer ?? "No answer found";
}

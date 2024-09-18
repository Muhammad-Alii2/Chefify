import OpenAI from "openai";
import { NextResponse } from "next/server";

async function fetchOpenAICompletionsStream(messages, callback) {
  const OPEN_API_KEY = process.env.OPENAI_API_KEY;

  const openai = new OpenAI({ apiKey: OPEN_API_KEY });
  const aiModel = "gpt-3.5-turbo";

  try {
    const completion = await openai.chat.completions.create({
      model: aiModel,
      messages: messages,
      temperature: 1,
      stream: true,
    });

    for await (const chunk of completion) {
      callback(chunk);
    }
  } catch (error) {
    console.error("Error fetching data from OpenAI API:", error);
    throw new Error("Error fetching data from OpenAI API.");
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const ingredients = searchParams.get('ingredients');
  const mealType = searchParams.get('mealType');
  const cuisine = searchParams.get('cuisine');
  const cookingTime = searchParams.get('cookingTime');
  const complexity = searchParams.get('complexity');

  // Create a ReadableStream to stream data
  const stream = new ReadableStream({
    async start(controller) {
      // Function to send messages as chunks
      const sendEvent = (chunk) => {
        let chunkResponse;
        if (chunk.choices[0].finish_reason === "stop") {
          // End the stream once the completion is done
          controller.enqueue(
            `data: ${JSON.stringify({ action: "close" })}\n\n`
          );
          controller.close();
        } else {
          if (
            chunk.choices[0].delta.role &&
            chunk.choices[0].delta.role === "assistant"
          ) {
            chunkResponse = {
              action: "start",
            };
          } else {
            chunkResponse = {
              action: "chunk",
              chunk: chunk.choices[0].delta.content,
            };
          }
          // Enqueue each chunk as a part of the response
          controller.enqueue(
            `data: ${JSON.stringify(chunkResponse)}\n\n`
          );
        }
      };

      // Create the prompt to send to OpenAI
      const prompt = [];
      prompt.push("Generate a recipe that incorporates the following details:");
      prompt.push(`[Ingredients: ${ingredients}]`);
      prompt.push(`[Meal Type: ${mealType}]`);
      prompt.push(`[Cuisine Preference: ${cuisine}]`);
      prompt.push(`[Cooking Time: ${cookingTime}]`);
      prompt.push(`[Complexity: ${complexity}]`);
      prompt.push(
        "Please provide a detailed recipe, including steps for preparation and cooking. Only use the ingredients provided."
      );
      prompt.push(
        "The recipe should highlight the fresh and vibrant flavors of the ingredients."
      );
      prompt.push(
        "Also give the recipe a suitable name in its local language based on cuisine preference."
      );

      const messages = [
        {
          role: "system",
          content: prompt.join(" "),
        },
      ];

      // Fetch the OpenAI completion and stream the result
      await fetchOpenAICompletionsStream(messages, sendEvent);
    },
  });

  // Return the stream using NextResponse
  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}

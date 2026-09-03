import "dotenv/config";
import openAi from "openai";

const openai = new openAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function aiAnalyzer(image) {
  try {
    const prompt = `
    Analyze this image and describe what is visible in the scene. 
    Focus on identifying whether a road accident is visible and describe the vehicles, 
    people, road conditions, and other relevant details that can be observed. 
    Do not assume or invent information that is not visible in the image.`;

    // const reportImage = `${image}`;

    const description = await openai.chat.completions.create({
      model: "gpt-5.6-luna",
      messages: [
        { role: "system", content: prompt },
        {
          role: "user",
          content: [{ type: "image_url", image_url: { url: image } }],
        },
      ],
    });

    return description.choices[0].message.content;
  } catch (error) {
    console.log(error);
    throw new Error("AI Service Failed: " + error.message);
  }
}

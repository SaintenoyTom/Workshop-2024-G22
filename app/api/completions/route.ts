import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  project: process.env.OPENAI_PROJECT_ID
} );

export async function GET(request: Request) {
  const {message} = await request.json();

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      });
  
    
      return Response.json({response: response.choices[0].message});
    } catch (error) {
      console.error("Erreur lors de la génération d'un résultat", error);
      throw error; 
    }
  }


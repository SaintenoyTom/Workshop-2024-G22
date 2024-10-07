import OpenAI from "openai";
const openai = new OpenAI();

export async function getMeaning(message: string) {
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
  
    
      return response.choices[0].message;
    } catch (error) {
      console.error("Erreur lors de la génération d'un résultat", error);
      throw error; 
    }
  }
import OpenAI from "openai";


export async function POST(request: Request) {

  const message = await request.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    project: process.env.OPENAI_PROJECT_ID
  });

  const requestToAI = `
    You are a doctor trying to advise someone regarding their health and the practicians they would need to consult. 
    You are given the following data as a json.
    
    The height is in centimeters and the weight in kilograms.

    If the age equals to zero of if any value is empty, please ignore this value.

    The patient's age : ${message.age}

    The patient's weight: ${message.weight}

    The patient's height: ${message.height}

    The patient's symptoms: ${message.symptoms}

    More information about his symptoms: ${message.customSymptom}


    Please return your advice in the following json format :

    '''json
      {
          "diagnosis": The explanation of the potential diagnosis if enough information is given. Please remind that you are not a doctor but an advisor. Please refrain from being hurtful. Do not exceed 2000 characters.
          "advice": Give advice in order to improve the patient health. Do not advise taking any medecine and remind they need to consult their general practitioner who will give the right medecine if necessary. Do not exceed 500 characters.
          "checkup": Regarding the information given, suggest health examinations that are done for people matching their criteria. Remind the need to consult a medical expert.
          "recommendations": A list of strings containing practitioners that you would recommend consulting to the patient.
      }
    '''

    All the answers must be written in french.

    Do not send anything else than the json asked.
  `

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "user",
          content: requestToAI
        }
      ]
    });


    return Response.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error("Erreur lors de la génération d'un résultat", error);
    throw error;
  }
}


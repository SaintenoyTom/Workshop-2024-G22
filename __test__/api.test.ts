import { POST } from "../app/api/completions/route"; // Assurez-vous de donner le bon chemin
import { createRequest } from "node-mocks-http";

// Simuler les variables d'environnement
process.env.OPENAI_API_KEY = 'mock-api-key';
process.env.OPENAI_PROJECT_ID = 'mock-project-id';

// Mock OpenAI API response
jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{
            message: {
              content: JSON.stringify({
                diagnosis: "Ceci est un diagnostic simulé.",
                advice: "Veuillez consulter votre médecin généraliste.",
                checkup: "Consultez un spécialiste pour une évaluation approfondie.",
                recommendations: ["Médecin généraliste", "Ophtalmologue"],
              }),
            },
          }],
        }),
      },
    },
  }));
});

describe("POST /api/completions", () => {
  it("should return a valid AI response in JSON format", async () => {
    // Simuler l'objet Request avec la méthode json()
    const request = {
      json: jest.fn().mockResolvedValue({
        age: 30,
        weight: 70,
        height: 175,
        symptoms: "Fever and cough",
      }),
    };

    const response = await POST(request as any); // Type assertion pour TypeScript

    expect(response).toBeDefined();
    expect(response.status).toBe(200); // Vérifiez que la réponse a le bon statut
    expect(await response.json()).toHaveProperty('response'); // Vérifiez que la réponse a bien une propriété `response`
  });

  it('should handle errors from the OpenAI API', async () => {
    // Simuler une erreur lors de l'appel à l'API OpenAI
    jest.spyOn(console, 'error').mockImplementation(() => { });

    // Simuler une requête avec des données incorrectes
    const req = createRequest({
      method: 'POST',
      body: { age: 0 }, // Données incomplètes pour provoquer une erreur
    });

    await expect(POST(req)).rejects.toThrow();
  });
});

import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiService {
    private genAI: GoogleGenerativeAI;

    constructor(apiKey: string) {
        if (!apiKey) {
            console.error('API key is undefined or empty');
            throw new Error('API key is missing. Please check your environment variables.');
        }

        this.genAI = new GoogleGenerativeAI(apiKey);
    }

    async generateResponse(prompt: string): Promise<string> {
        if (!prompt.trim()) {
            throw new Error('Please type a message to continue.');
        }

        try {
            // Correct way to initialize the model
            const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);
            const response = await result.response.text();
            return response;
        } catch (error) {
            console.error('Error generating response:', error);
            if (error instanceof Error) {
                if (error.message.includes('404')) {
                    throw new Error('Model not found. Please check the model name or API configuration.');
                }
                if (error.message.includes('API_KEY_INVALID')) {
                    throw new Error('Invalid API key. Please verify it at https://makersuite.google.com/app/apikey');
                }
                throw new Error(`Failed to generate response: ${error.message}`);
            }
            throw new Error('Failed to generate response. Please try again.');
        }
    }
}
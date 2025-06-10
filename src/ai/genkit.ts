
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

console.log("Initializing Genkit with Google AI plugin...");

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-pro', // Changed from gemini-2.0-flash
});

console.log("Genkit initialized. Default model set to: googleai/gemini-pro");

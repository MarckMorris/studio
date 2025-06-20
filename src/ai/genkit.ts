
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

console.log("Initializing Genkit with Google AI plugin...");

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-1.5-flash-latest', // Changed from gemini-pro
});

console.log("Genkit initialized. Default model set to: googleai/gemini-1.5-flash-latest");


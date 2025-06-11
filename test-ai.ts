
// test-ai.ts
import { config } from 'dotenv';
config(); // Load .env file from project root

import { ai } from './src/ai/genkit'; // Path to your genkit.ts

async function runTest() {
  console.log('Starting direct AI call test...');
  if (!process.env.GOOGLE_API_KEY) {
    console.error('ERROR: GOOGLE_API_KEY is not found in your .env file or environment.');
    console.log('Please ensure your .env file is in the project root and contains GOOGLE_API_KEY=your_key');
    return;
  }
  console.log('GOOGLE_API_KEY is present (length:', process.env.GOOGLE_API_KEY.length, ') - value is masked for security.');

  try {
    // The default model from genkit.ts will be used if not specified here,
    // but for clarity in testing, we can specify it.
    const testModel = 'googleai/gemini-1.5-flash-latest';
    console.log('Attempting to generate text with AI model:', testModel); 
    const { text } = await ai.generate({
      prompt: 'Translate "hello world" to Spanish.',
      model: testModel, 
    });
    console.log('SUCCESS! AI Response:', text);
  } catch (e: any) {
    console.error('AI call FAILED:');
    if (e instanceof Error) {
      console.error('  Error Name:', e.name);
      console.error('  Error Message:', e.message);
      if (e.stack) {
        console.error('  Error Stack:', e.stack);
      }
    } else {
      console.error('  Raw Error Object:', JSON.stringify(e, null, 2));
    }
    // Log additional properties if 'e' is an object
    if (typeof e === 'object' && e !== null) {
      const errorObject = e as Record<string, any>;
      console.error('  Additional error properties:');
      for (const key in errorObject) {
        if (Object.prototype.hasOwnProperty.call(errorObject, key) && key !== 'message' && key !== 'name' && key !== 'stack') {
          console.error(`    ${key}:`, errorObject[key]);
        }
      }
    }
  }
}

runTest();


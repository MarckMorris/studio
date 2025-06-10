
'use server';

import { convertVulnerabilityDescriptionToPlainEnglish, type ConvertVulnerabilityDescriptionToPlainEnglishInput, type ConvertVulnerabilityDescriptionToPlainEnglishOutput } from '@/ai/flows/convert-vulnerability-description-to-plain-english';

export async function handleWebScanAction(formData: FormData): Promise<ConvertVulnerabilityDescriptionToPlainEnglishOutput | { error: string }> {
  const technicalDescription = formData.get('technical-description') as string;
  // const scanName = formData.get('scan-name-web') as string; // We are not using this yet
  // const webUrl = formData.get('web-url') as string; // We are not using this yet

  if (!technicalDescription) {
    return { error: "Technical description is required for AI analysis." };
  }

  try {
    const input: ConvertVulnerabilityDescriptionToPlainEnglishInput = { technicalDescription };
    const result = await convertVulnerabilityDescriptionToPlainEnglish(input);
    return result;
  } catch (e) {
    console.error("Detailed error calling AI flow 'convertVulnerabilityDescriptionToPlainEnglish':");
    if (e instanceof Error) {
      console.error("Error Name:", e.name);
      console.error("Error Message:", e.message);
      if (e.stack) {
        console.error("Error Stack:", e.stack);
      }
    } else {
      // Log as much detail as possible if it's not a standard Error object
      console.error("Raw Error Object:", JSON.stringify(e, null, 2));
    }
    
    // Genkit errors might have additional properties, let's try to log them if they exist
    if (typeof e === 'object' && e !== null) {
      const errorObject = e as Record<string, any>;
      for (const key in errorObject) {
        if (Object.prototype.hasOwnProperty.call(errorObject, key) && key !== 'message' && key !== 'name' && key !== 'stack') {
          console.error(`Error Property - ${key}:`, errorObject[key]);
        }
      }
    }
    
    return { error: "Failed to get AI analysis. Please try again." };
  }
}


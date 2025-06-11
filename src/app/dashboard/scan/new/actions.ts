
'use server';

import { convertVulnerabilityDescriptionToPlainEnglish, type ConvertVulnerabilityDescriptionToPlainEnglishInput, type ConvertVulnerabilityDescriptionToPlainEnglishOutput } from '@/ai/flows/convert-vulnerability-description-to-plain-english';

export async function handleWebScanAction(formData: FormData): Promise<ConvertVulnerabilityDescriptionToPlainEnglishOutput | { error: string }> {
  const technicalDescription = formData.get('technical-description') as string;

  if (!technicalDescription) {
    console.error("handleWebScanAction: Technical description is missing from formData.");
    return { error: "Technical description is required for AI analysis." };
  }

  console.log("handleWebScanAction: Received technical description:", technicalDescription);

  try {
    const input: ConvertVulnerabilityDescriptionToPlainEnglishInput = { technicalDescription };
    console.log("handleWebScanAction: Calling convertVulnerabilityDescriptionToPlainEnglish with input:", input);
    const result = await convertVulnerabilityDescriptionToPlainEnglish(input);
    console.log("handleWebScanAction: Received result from convertVulnerabilityDescriptionToPlainEnglish:", result);
    return result;
  } catch (e) {
    console.error("--- START: Detailed error calling AI flow 'convertVulnerabilityDescriptionToPlainEnglish' ---");
    let errorMessageToReturn = "Failed to get AI analysis. Please try again.";
    if (e instanceof Error) {
      console.error("Error Name:", e.name);
      console.error("Error Message:", e.message);
      errorMessageToReturn = e.message; // Capture the specific error message if available
      if (e.stack) {
        console.error("Error Stack:", e.stack);
      }
    } else {
      // Log as much detail as possible if it's not a standard Error object
      console.error("Raw Error Object:", JSON.stringify(e, null, 2));
      // Try to get a string representation if possible
      try {
        const eString = String(e);
        if (eString !== '[object Object]') {
             errorMessageToReturn = eString;
        }
      } catch (strErr) {
        // Ignore if cannot stringify
      }
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
    console.error("--- END: Detailed error calling AI flow 'convertVulnerabilityDescriptionToPlainEnglish' ---");
    console.error(`handleWebScanAction: About to return error to client. Underlying issue (summary): ${errorMessageToReturn}. Full details above.`);
    return { error: "Failed to get AI analysis. Please try again." }; // We still return the generic message to the client
  }
}

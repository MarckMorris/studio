
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
    console.error("Error calling AI flow:", e);
    return { error: "Failed to get AI analysis. Please try again." };
  }
}

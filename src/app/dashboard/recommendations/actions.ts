
'use server';

import { suggestFix, type SuggestFixInput, type SuggestFixOutput } from '@/ai/flows/suggest-fix';

export async function handleSuggestFixAction(formData: FormData): Promise<SuggestFixOutput | { error: string }> {
  const vulnerabilityDescription = formData.get('vulnerability-description') as string;
  const technologyStack = formData.get('technology-stack') as string;
  const codeSnippet = formData.get('code-snippet') as string;

  if (!vulnerabilityDescription || !technologyStack) { // Code snippet can be optional
    return { error: "Vulnerability description and technology stack are required." };
  }

  try {
    const input: SuggestFixInput = { vulnerabilityDescription, technologyStack, codeSnippet };
    const result = await suggestFix(input);
    return result;
  } catch (e) {
    console.error("Error calling AI flow for fix suggestion:", e);
    return { error: "Failed to get AI fix suggestion. Please try again." };
  }
}

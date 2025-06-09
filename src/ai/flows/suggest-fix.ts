'use server';

/**
 * @fileOverview Suggests code snippets or configuration changes using GenAI to fix identified vulnerabilities.
 *
 * - suggestFix - A function that suggests code snippets or configuration changes to fix identified vulnerabilities.
 * - SuggestFixInput - The input type for the suggestFix function.
 * - SuggestFixOutput - The return type for the suggestFix function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFixInputSchema = z.object({
  vulnerabilityDescription: z
    .string()
    .describe('Description of the identified vulnerability.'),
  technologyStack: z.string().describe('The technology stack in use.'),
  codeSnippet: z
    .string()
    .describe('The relevant code snippet with the vulnerability.'),
});

export type SuggestFixInput = z.infer<typeof SuggestFixInputSchema>;

const SuggestFixOutputSchema = z.object({
  suggestedFix: z.string().describe('The suggested code snippet or configuration change to fix the vulnerability.'),
  explanation: z.string().describe('A brief explanation of the suggested fix.'),
});

export type SuggestFixOutput = z.infer<typeof SuggestFixOutputSchema>;

export async function suggestFix(input: SuggestFixInput): Promise<SuggestFixOutput> {
  return suggestFixFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFixPrompt',
  input: {schema: SuggestFixInputSchema},
  output: {schema: SuggestFixOutputSchema},
  prompt: `You are a security expert specializing in providing code fixes for vulnerabilities.

  Based on the provided vulnerability description, technology stack, and code snippet, suggest a fix.
  Also provide a brief explanation of the fix.

Vulnerability Description: {{{vulnerabilityDescription}}}
Technology Stack: {{{technologyStack}}}
Code Snippet: {{{codeSnippet}}}

Suggestion:
`,
});

const suggestFixFlow = ai.defineFlow(
  {
    name: 'suggestFixFlow',
    inputSchema: SuggestFixInputSchema,
    outputSchema: SuggestFixOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

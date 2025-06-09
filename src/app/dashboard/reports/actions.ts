
'use server';

import { generateReportSummary, type GenerateReportSummaryInput, type GenerateReportSummaryOutput } from '@/ai/flows/generate-report-summary';

export async function handleGenerateSummaryAction(formData: FormData): Promise<GenerateReportSummaryOutput | { error: string }> {
  const reportText = formData.get('report-text') as string;

  if (!reportText) {
    return { error: "Report text is required to generate a summary." };
  }

  try {
    const input: GenerateReportSummaryInput = { report: reportText };
    const result = await generateReportSummary(input);
    return result;
  } catch (e) {
    console.error("Error calling AI flow for report summary:", e);
    return { error: "Failed to generate AI summary. Please try again." };
  }
}

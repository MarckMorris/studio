
"use client";

import React, { useState, useTransition } from 'react';
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { generateReportSummary, type GenerateReportSummaryInput, type GenerateReportSummaryOutput } from '@/ai/flows/generate-report-summary';

async function handleGenerateSummary(formData: FormData): Promise<GenerateReportSummaryOutput | { error: string }> {
  'use server';
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

export default function ReportsPage() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [summaryResult, setSummaryResult] = useState<GenerateReportSummaryOutput | null>(null);
  const [summaryError, setSummaryError] = useState<string | null>(null);

  const onGenerateSummarySubmit = (formData: FormData) => {
    setSummaryResult(null);
    setSummaryError(null);
    startTransition(async () => {
      const result = await handleGenerateSummary(formData);
      if ('error' in result) {
        setSummaryError(result.error);
        toast({
          title: "Summary Generation Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        setSummaryResult(result);
        toast({
          title: "AI Summary Generated",
          description: "The report summary has been successfully created.",
        });
      }
    });
  };

  return (
    <>
      <PageHeader
        title="Vulnerability Reports"
        description="Generate AI-powered summaries for your detailed scan reports."
      />
      <Card>
        <form action={onGenerateSummarySubmit}>
          <CardHeader>
            <CardTitle>Generate AI Report Summary</CardTitle>
            <CardDescription>Paste the full text of a vulnerability report below to get a concise summary from our AI.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="report-text">Full Report Text</Label>
              <Textarea
                id="report-text"
                name="report-text"
                placeholder="Paste your detailed vulnerability report here..."
                rows={15}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Generating Summary..." : <><Brain className="mr-2 h-4 w-4" />Generate AI Summary</>}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {summaryResult && (
        <Alert className="mt-6">
          <FileText className="h-4 w-4" />
          <AlertTitle>AI-Generated Report Summary</AlertTitle>
          <AlertDescription>
            <p className="mt-2 whitespace-pre-wrap">{summaryResult.summary}</p>
          </AlertDescription>
        </Alert>
      )}
      {summaryError && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{summaryError}</AlertDescription>
        </Alert>
      )}
    </>
  );
}

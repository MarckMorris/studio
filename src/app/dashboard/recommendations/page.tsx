
"use client";

import React, { useState, useTransition } from 'react';
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ShieldCheck, Lightbulb } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { suggestFix, type SuggestFixInput, type SuggestFixOutput } from '@/ai/flows/suggest-fix';

async function handleSuggestFix(formData: FormData): Promise<SuggestFixOutput | { error: string }> {
  'use server';
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

export default function RecommendationsPage() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [fixSuggestion, setFixSuggestion] = useState<SuggestFixOutput | null>(null);
  const [fixError, setFixError] = useState<string | null>(null);

  const onSuggestFixSubmit = (formData: FormData) => {
    setFixSuggestion(null);
    setFixError(null);
    startTransition(async () => {
      const result = await handleSuggestFix(formData);
      if ('error' in result) {
        setFixError(result.error);
        toast({
          title: "Suggestion Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        setFixSuggestion(result);
        toast({
          title: "AI Fix Suggestion Ready",
          description: "A fix has been suggested by the AI.",
        });
      }
    });
  };

  return (
    <>
      <PageHeader
        title="Security Recommendations"
        description="Get AI-powered fix suggestions for identified vulnerabilities."
      />
      <Card>
        <form action={onSuggestFixSubmit}>
          <CardHeader>
            <CardTitle>Get AI Fix Suggestion</CardTitle>
            <CardDescription>Provide details about a vulnerability, and our AI will suggest a fix.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="vulnerability-description">Vulnerability Description</Label>
              <Textarea
                id="vulnerability-description"
                name="vulnerability-description"
                placeholder="e.g., SQL Injection vulnerability in user profile update page due to unsanitized 'userID' parameter."
                rows={3}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="technology-stack">Technology Stack</Label>
              <Input
                id="technology-stack"
                name="technology-stack"
                placeholder="e.g., Node.js with Express, PostgreSQL"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="code-snippet">Relevant Code Snippet (Optional)</Label>
              <Textarea
                id="code-snippet"
                name="code-snippet"
                placeholder="Paste the vulnerable code snippet here..."
                rows={8}
                className="font-mono text-sm"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Getting Suggestion..." : <><Lightbulb className="mr-2 h-4 w-4" />Get AI Fix Suggestion</>}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {fixSuggestion && (
        <div className="mt-6 space-y-4">
          <Alert>
            <Brain className="h-4 w-4" />
            <AlertTitle>AI Suggested Fix</AlertTitle>
            <AlertDescription>
              <p className="font-semibold mt-2">Suggested Code/Configuration Change:</p>
              <pre className="mt-1 p-3 bg-muted rounded-md text-sm overflow-x-auto whitespace-pre-wrap">
                <code>{fixSuggestion.suggestedFix}</code>
              </pre>
            </AlertDescription>
          </Alert>
          <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Explanation of the Fix</AlertTitle>
            <AlertDescription>
              <p className="mt-2 whitespace-pre-wrap">{fixSuggestion.explanation}</p>
            </AlertDescription>
          </Alert>
        </div>
      )}
      {fixError && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{fixError}</AlertDescription>
        </Alert>
      )}
    </>
  );
}

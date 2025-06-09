
"use client";

import React, { useState, useTransition } from 'react';
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Globe, Smartphone, UploadCloud, Brain } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { type ConvertVulnerabilityDescriptionToPlainEnglishOutput } from '@/ai/flows/convert-vulnerability-description-to-plain-english';
import { handleWebScanAction } from './actions';

export default function NewScanPage() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [aiResult, setAiResult] = useState<ConvertVulnerabilityDescriptionToPlainEnglishOutput | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const onWebScanSubmit = (formData: FormData) => {
    setAiResult(null);
    setAiError(null);
    const technicalDescription = formData.get('technical-description') as string;
    console.log("New Scan Form Submitted. Technical Description:", technicalDescription);

    startTransition(async () => {
      console.log("Calling handleWebScanAction...");
      const result = await handleWebScanAction(formData);
      console.log("Received result from handleWebScanAction:", result);
      if ('error' in result) {
        setAiError(result.error);
        toast({
          title: "Scan Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        setAiResult(result);
        toast({
          title: "AI Analysis Complete",
          description: "Plain English description generated.",
        });
      }
    });
  };

  return (
    <>
      <PageHeader
        title="Initiate a New Security Scan"
        description="Select your application type and provide the necessary details to start scanning."
      />
      <Tabs defaultValue="web" className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="web"><Globe className="mr-2 h-4 w-4" />Web Application</TabsTrigger>
          <TabsTrigger value="mobile"><Smartphone className="mr-2 h-4 w-4" />Mobile Application</TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <form action={onWebScanSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Scan Web Application</CardTitle>
                <CardDescription>Enter the URL and a technical vulnerability description for AI analysis.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="web-url">Application URL</Label>
                  <Input id="web-url" name="web-url" placeholder="https://example.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="scan-name-web">Scan Name (Optional)</Label>
                  <Input id="scan-name-web" name="scan-name-web" placeholder="My Awesome App Scan" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="technical-description">Technical Vulnerability Description (for AI Demo)</Label>
                  <Textarea
                    id="technical-description"
                    name="technical-description"
                    placeholder="e.g., Cross-Site Scripting (XSS) in search bar due to improper input sanitization of query parameter 'q'."
                    rows={4}
                    required 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Scanning..." : <><Zap className="mr-2 h-4 w-4" />Start Web Scan & AI Analysis</>}
                </Button>
              </CardFooter>
            </Card>
          </form>
          {aiResult && (
            <Alert className="mt-6">
              <Brain className="h-4 w-4" />
              <AlertTitle>AI-Generated Plain English Description</AlertTitle>
              <AlertDescription>
                <p className="mt-2 whitespace-pre-wrap">{aiResult.plainEnglishDescription}</p>
              </AlertDescription>
            </Alert>
          )}
          {aiError && (
            <Alert variant="destructive" className="mt-6">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{aiError}</AlertDescription>
            </Alert>
          )}
        </TabsContent>
        <TabsContent value="mobile">
          <Card>
            <CardHeader>
              <CardTitle>Scan Mobile Application</CardTitle>
              <CardDescription>Upload your mobile application package (.apk, .ipa) to begin scanning.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-1">
                <Label htmlFor="scan-name-mobile">Scan Name (Optional)</Label>
                <Input id="scan-name-mobile" placeholder="My Mobile App Scan" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="app-file">Application File</Label>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="app-file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-accent/10">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">.APK, .IPA (MAX. 100MB)</p>
                        </div>
                        <Input id="app-file-upload" type="file" className="hidden" />
                    </label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled><Zap className="mr-2 h-4 w-4" />Start Mobile Scan (Coming Soon)</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Globe, Smartphone, UploadCloud } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewScanPage() {
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
          <Card>
            <CardHeader>
              <CardTitle>Scan Web Application</CardTitle>
              <CardDescription>Enter the URL of your web application to begin scanning.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="web-url">Application URL</Label>
                <Input id="web-url" placeholder="https://example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="scan-name-web">Scan Name (Optional)</Label>
                <Input id="scan-name-web" placeholder="My Awesome App Scan" />
              </div>
              {/* Add more web-specific options here, e.g., authentication, scan depth */}
            </CardContent>
            <CardFooter>
              <Button className="w-full"><Zap className="mr-2 h-4 w-4" />Start Web Scan</Button>
            </CardFooter>
          </Card>
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
              {/* Add more mobile-specific options here, e.g., platform type */}
            </CardContent>
            <CardFooter>
              <Button className="w-full"><Zap className="mr-2 h-4 w-4" />Start Mobile Scan</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

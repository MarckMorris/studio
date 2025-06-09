import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Code, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ApiAccessPage() {
  return (
    <>
      <PageHeader
        title="API Access"
        description="Integrate Scan-ShieldAI into your custom workflows using our REST API."
      />
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>Use these keys to authenticate your API requests. Keep them secure!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="api-key-1">Active API Key</Label>
              <div className="flex items-center gap-2">
                <Input id="api-key-1" value="ssa_live_********************abcd" readOnly />
                <Button variant="outline" size="sm">Copy</Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Revoke</Button>
              </div>
            </div>
             <Button><KeyRound className="mr-2 h-4 w-4" />Generate New API Key</Button>
          </div>
        </CardContent>
      </Card>
      
      <EmptyState
        icon={Code}
        title="API Documentation Coming Soon"
        description="Detailed API documentation will be available here shortly to help you get started with integrations."
        action={{label: "View Developer Docs (Soon)", href: "#"}}
      />
    </>
  );
}

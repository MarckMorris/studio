import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { GitMerge, Github, Gitlab } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        title="CI/CD Integrations"
        description="Connect Scan-ShieldAI with your development pipeline for automated security."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Github className="h-8 w-8" />
              <CardTitle>GitHub</CardTitle>
            </div>
            <CardDescription>Integrate with GitHub Actions to scan your code on every pull request or commit.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button disabled>Connect GitHub (Coming Soon)</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Gitlab className="h-8 w-8" />
              <CardTitle>GitLab</CardTitle>
            </div>
            <CardDescription>Integrate with GitLab CI/CD to embed security scanning into your pipelines.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button disabled>Connect GitLab (Coming Soon)</Button>
          </CardContent>
        </Card>
      </div>
       <div className="mt-8">
        <EmptyState
            icon={GitMerge}
            title="More Integrations Under Development"
            description="We are working on adding more integrations to support various CI/CD tools and platforms."
          />
      </div>
    </>
  );
}

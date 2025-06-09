import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlayCircle, History, ShieldCheck, Zap, FileText, Target, GitMerge, Settings } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome to Scan-ShieldAI"
        description="Your intelligent security dashboard."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Initiate Scan</CardTitle>
            <PlayCircle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Start a New Scan</div>
            <p className="text-xs text-muted-foreground mt-1">
              Scan your web or mobile applications for vulnerabilities.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link href="/dashboard/scan/new">New Scan</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <History className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Scan History</div>
            <p className="text-xs text-muted-foreground mt-1">
              View your past scans and reports.
            </p>
            <Button variant="outline" asChild className="mt-4 w-full">
              <Link href="/dashboard/scan-history">View History</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Posture</CardTitle>
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Good</div>
            <p className="text-xs text-muted-foreground mt-1">
              Overall security status based on recent scans.
            </p>
             <Button variant="outline" asChild className="mt-4 w-full">
              <Link href="/dashboard/recommendations">View Recommendations</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="font-headline text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/dashboard/reports" className="block p-4 bg-card rounded-lg shadow hover:bg-accent/10 transition-colors">
            <FileText className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold">View Reports</h3>
            <p className="text-sm text-muted-foreground">Access detailed vulnerability reports.</p>
          </Link>
          <Link href="/dashboard/simulate" className="block p-4 bg-card rounded-lg shadow hover:bg-accent/10 transition-colors">
            <Target className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold">Simulate Attacks</h3>
            <p className="text-sm text-muted-foreground">Run automated penetration tests.</p>
          </Link>
          <Link href="/dashboard/integrations" className="block p-4 bg-card rounded-lg shadow hover:bg-accent/10 transition-colors">
            <GitMerge className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold">CI/CD Integrations</h3>
            <p className="text-sm text-muted-foreground">Connect with your DevOps pipeline.</p>
          </Link>
          <Link href="/dashboard/settings" className="block p-4 bg-card rounded-lg shadow hover:bg-accent/10 transition-colors">
            <Settings className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold">Account Settings</h3>
            <p className="text-sm text-muted-foreground">Manage your profile and preferences.</p>
          </Link>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-card rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image 
              src="https://placehold.co/300x200.png" 
              alt="AI Security Illustration" 
              width={300} 
              height={200} 
              className="rounded-md"
              data-ai-hint="artificial intelligence security" 
            />
            <div>
              <h3 className="font-headline text-xl font-semibold mb-2 text-primary">Leverage the Power of AI</h3>
              <p className="text-muted-foreground mb-4">
                Scan-ShieldAI uses sophisticated Large Language Models (LLMs) and machine learning algorithms to provide unparalleled accuracy in vulnerability detection and offer intelligent, context-aware remediation advice. Stay ahead of threats with a security solution that learns and adapts.
              </p>
              <Button variant="link" asChild className="p-0 h-auto">
                <Link href="#">Learn more about our AI technology &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
    </>
  );
}

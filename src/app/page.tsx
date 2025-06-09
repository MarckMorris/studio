import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Zap, ShieldAlert, BrainCircuit, FileText } from 'lucide-react';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingFooter } from '@/components/landing/LandingFooter';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "AI Vulnerability Scanning",
    description: "Automatically scan web and mobile apps for vulnerabilities using cutting-edge AI.",
    link: "#",
  },
  {
    icon: <FileText className="h-8 w-8 text-accent" />,
    title: "Natural Language Reports",
    description: "Generate clear, actionable security reports and recommendations in plain English.",
    link: "#",
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-accent" />,
    title: "Attack Simulation",
    description: "Simulate low-risk attacks to identify vulnerabilities and assess your security posture.",
    link: "#",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: "Customized Security",
    description: "Receive AI-driven security recommendations tailored to your tech stack and maturity.",
    link: "#",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Secure Your Applications with <span className="text-primary">AI-Powered</span> Vigilance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Scan-ShieldAI leverages advanced artificial intelligence to proactively identify and mitigate security vulnerabilities in your web and mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Why Scan-ShieldAI?</h2>
              <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the intelligent features that make Scan-ShieldAI the ultimate security partner for your development lifecycle.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <CardTitle className="font-headline text-xl text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works / Visual Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Intelligent Security, Simplified</h2>
                <p className="text-muted-foreground mb-4">
                  Scan-ShieldAI integrates seamlessly into your workflow, providing continuous security analysis powered by sophisticated AI models.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Automated scanning identifies known and emerging threats.
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    AI-driven insights prioritize critical vulnerabilities.
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Actionable, easy-to-understand reports speed up remediation.
                  </li>
                </ul>
                 <Button size="lg" asChild className="mt-8">
                    <Link href="/dashboard">Explore Dashboard</Link>
                  </Button>
              </div>
              <div>
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Scan-ShieldAI Dashboard Preview"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint="cyber security dashboard"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Ready to Fortify Your Applications?</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join developers and businesses who trust Scan-ShieldAI for proactive, intelligent security.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link href="/signup">Start Your Free Trial Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}

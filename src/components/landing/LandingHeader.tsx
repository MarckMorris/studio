import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/Logo';
import { ShieldCheck } from 'lucide-react';

export function LandingHeader() {
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Scan-ShieldAI Home">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-semibold text-foreground">Scan-ShieldAI</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

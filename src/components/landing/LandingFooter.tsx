import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { ShieldCheck } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Scan-ShieldAI Home">
               <ShieldCheck className="h-8 w-8 text-primary" />
               <span className="font-headline text-xl font-semibold text-foreground">Scan-ShieldAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Advanced AI-Powered Security Scanning for modern applications.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-md font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Scan-ShieldAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

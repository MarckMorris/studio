import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/icons/Logo";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

type AuthCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
};

export function AuthCard({ title, description, children, footerContent }: AuthCardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <Link href="/" className="flex items-center gap-2 mb-8" aria-label="Scan-ShieldAI Home">
        <ShieldCheck className="h-10 w-10 text-primary" />
        <span className="font-headline text-2xl font-semibold text-foreground">Scan-ShieldAI</span>
      </Link>
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {footerContent && (
          <div className="p-6 pt-0 text-center text-sm text-muted-foreground">
            {footerContent}
          </div>
        )}
      </Card>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="w-full max-w-md">
      <Link href="/" className="flex items-center justify-center gap-2 mb-6 text-foreground" aria-label="Scan-ShieldAI Home">
        <ShieldCheck className="h-8 w-8 text-primary" />
        <span className="font-headline text-xl font-semibold">Scan-ShieldAI</span>
      </Link>
      <Card className="w-full shadow-xl">
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

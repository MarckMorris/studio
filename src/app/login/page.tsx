import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";
import PublicPageLayout from "@/components/layout/PublicPageLayout";

export default function LoginPage() {
  return (
    <PublicPageLayout>
      <AuthCard
        title="Welcome Back"
        description="Log in to access your Scan-ShieldAI dashboard."
        footerContent={
          <>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </PublicPageLayout>
  );
}

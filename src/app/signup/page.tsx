import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { SignUpForm } from "@/components/auth/SignUpForm";
import PublicPageLayout from "@/components/layout/PublicPageLayout";

export default function SignUpPage() {
  return (
    <PublicPageLayout>
      <AuthCard
        title="Create an Account"
        description="Get started with Scan-ShieldAI today."
        footerContent={
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </>
        }
      >
        <SignUpForm />
      </AuthCard>
    </PublicPageLayout>
  );
}

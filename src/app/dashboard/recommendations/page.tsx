import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ShieldCheck } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        title="Security Recommendations"
        description="Customized recommendations based on your scans and technology stack."
      />
      <EmptyState
        icon={ShieldCheck}
        title="No Recommendations Yet"
        description="Complete a scan to receive AI-powered security recommendations tailored for your applications."
        action={{ label: "Start New Scan", href: "/dashboard/scan/new" }}
      />
    </>
  );
}

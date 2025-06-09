import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Vulnerability Reports"
        description="Access detailed reports for your completed scans."
      />
      <EmptyState
        icon={FileText}
        title="No Reports Available"
        description="Completed scan reports will appear here. If you have completed scans, select one from Scan History to view its report."
        action={{ label: "View Scan History", href: "/dashboard/scan-history" }}
      />
    </>
  );
}

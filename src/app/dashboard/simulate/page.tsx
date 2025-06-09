import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Target } from "lucide-react";

export default function SimulatePage() {
  return (
    <>
      <PageHeader
        title="Attack Simulation"
        description="Simulate low-risk attacks to identify vulnerabilities and assess security posture."
      />
      <EmptyState
        icon={Target}
        title="Attack Simulation Coming Soon"
        description="This feature is under development. Soon you'll be able to run automated penetration tests."
      />
    </>
  );
}

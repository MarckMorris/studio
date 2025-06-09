import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { History, FileSearch, ShieldAlert } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const scans = [
  { id: "scan_001", name: "Main Website Scan", date: "2023-10-26", status: "Completed", vulnerabilities: 3, risk: "Medium" },
  { id: "scan_002", name: "iOS App v1.2", date: "2023-10-24", status: "Completed", vulnerabilities: 0, risk: "Low" },
  { id: "scan_003", name: "API Endpoint Test", date: "2023-10-22", status: "Failed", vulnerabilities: "N/A", risk: "N/A" },
  { id: "scan_004", name: "Android App v2.0 Beta", date: "2023-10-20", status: "In Progress", vulnerabilities: "N/A", risk: "N/A" },
  { id: "scan_005", name: "Staging Server Full Scan", date: "2023-10-18", status: "Completed", vulnerabilities: 12, risk: "High" },
];

function getRiskBadgeVariant(risk: string): "default" | "secondary" | "destructive" | "outline" {
  switch (risk.toLowerCase()) {
    case "low": return "secondary";
    case "medium": return "default";
    case "high": return "destructive";
    default: return "outline";
  }
}

function getStatusBadgeVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
   switch (status.toLowerCase()) {
    case "completed": return "default"; // Using primary for completed for now
    case "in progress": return "secondary";
    case "failed": return "destructive";
    default: return "outline";
  }
}


export default function ScanHistoryPage() {
  if (scans.length === 0) {
    return (
      <>
        <PageHeader
          title="Scan History"
          description="Review your past security scans and their results."
        />
        <EmptyState
          icon={FileSearch}
          title="No Scans Yet"
          description="You haven't performed any scans. Start a new scan to see its history here."
          action={{ label: "Start New Scan", href: "/dashboard/scan/new" }}
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Scan History"
        description="Review your past security scans and their results."
      >
        <Button asChild>
          <Link href="/dashboard/scan/new">Start New Scan</Link>
        </Button>
      </PageHeader>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scan Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Vulnerabilities</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scans.map((scan) => (
                <TableRow key={scan.id}>
                  <TableCell className="font-medium">{scan.name}</TableCell>
                  <TableCell>{scan.date}</TableCell>
                  <TableCell><Badge variant={getStatusBadgeVariant(scan.status)}>{scan.status}</Badge></TableCell>
                  <TableCell className="text-center">
                    {typeof scan.vulnerabilities === 'number' && scan.vulnerabilities > 0 ? (
                       <Badge variant="destructive">{scan.vulnerabilities}</Badge>
                    ) : typeof scan.vulnerabilities === 'number' ? (
                       <Badge variant="secondary">{scan.vulnerabilities}</Badge>
                    ) : (
                      scan.vulnerabilities
                    )}
                  </TableCell>
                  <TableCell><Badge variant={getRiskBadgeVariant(scan.risk)}>{scan.risk}</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" asChild disabled={scan.status !== "Completed"}>
                      <Link href={`/dashboard/reports/${scan.id}`}>View Report</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

// Added Card component for better structure
import { Card, CardContent } from "@/components/ui/card";

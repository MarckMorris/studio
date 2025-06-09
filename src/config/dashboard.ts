import type { DashboardConfig } from "@/types";
import {
  LayoutDashboard,
  FileText,
  Target,
  Settings,
  CreditCard,
  Code,
  GitMerge,
  PlayCircle,
  History,
  ShieldCheck,
  Users,
  Bell
} from "lucide-react";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // Main navigation items if needed in a top bar within dashboard, usually empty if sidebar is primary
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Start New Scan",
      href: "/dashboard/scan/new",
      icon: PlayCircle,
      variant: "ghost",
    },
    {
      title: "Scan History",
      href: "/dashboard/scan-history",
      icon: History,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: FileText,
    },
    {
      title: "Attack Simulation",
      href: "/dashboard/simulate",
      icon: Target,
    },
    {
      title: "Recommendations",
      href: "/dashboard/recommendations",
      icon: ShieldCheck,
    },
    {
      title: "CI/CD Integrations",
      href: "/dashboard/integrations",
      icon: GitMerge,
    },
     {
      title: "API Access",
      href: "/dashboard/api-access",
      icon: Code,
    },
    {
      title: "Subscriptions",
      href: "/dashboard/subscriptions",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    // Example items for ScanAsService roles/user management (if admin)
    // {
    //   title: "User Management",
    //   href: "/dashboard/admin/users",
    //   icon: Users,
    // },
  ],
};

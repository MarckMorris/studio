import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  label?: string;
  disabled?: boolean;
  external?: boolean;
  variant?: "default" | "ghost";
};

export type DashboardConfig = {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
};

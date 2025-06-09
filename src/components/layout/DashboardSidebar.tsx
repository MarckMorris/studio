"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardConfig } from "@/config/dashboard";
import type { NavItem } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck } from 'lucide-react';

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 border-r bg-card fixed h-full">
      <ScrollArea className="h-full py-4">
        <div className="px-4 mb-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-semibold">Scan-ShieldAI</span>
          </Link>
        </div>
        <nav className="flex flex-col space-y-1 px-4">
          {dashboardConfig.sidebarNav.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                item.disabled && "cursor-not-allowed opacity-80",
                pathname === item.href
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
              {item.label && (
                <span className="ml-auto text-xs">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}

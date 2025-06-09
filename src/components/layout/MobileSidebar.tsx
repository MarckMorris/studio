"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { dashboardConfig } from "@/config/dashboard";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck } from 'lucide-react';

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <ScrollArea className="h-full">
        <div className="p-4">
          <Link href="/dashboard" className="flex items-center gap-2 mb-6">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <span className="font-headline text-lg font-semibold">Scan-ShieldAI</span>
          </Link>
          <nav className="flex flex-col space-y-1">
            {dashboardConfig.sidebarNav.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.disabled && "cursor-not-allowed opacity-80",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

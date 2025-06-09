import { UserNav } from "@/components/layout/UserNav";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="md:hidden">
            <MobileSidebar />
          </div>
          <div className="hidden md:block">
            {/* Placeholder for breadcrumbs or search if needed */}
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            {/* Add other header items like notifications here */}
            <UserNav />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Topbar from "@/components/active-cases/components/Layout/Topbar";
import SideNav from "@/components/active-cases/components/Layout/SideNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-neutral-100 text-neutral-900">
      <Topbar />
      
      <div className="flex items-start gap-6 lg:gap-8 mt-4 px-4 sm:px-6 lg:px-8">
        <SideNav />
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="mt-4 flex gap-6">
            <main className="max-w-full space-y-4">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

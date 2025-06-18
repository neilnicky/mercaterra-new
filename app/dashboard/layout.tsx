import type React from "react";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { RouteGuard } from "@/components/auth/route-guard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - MercaTerra",
  description: "Manage your MercaTerra account",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard requireAuth={true}>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        {/* <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <DashboardNav />
          </aside> */}
        <main className="flex w-full flex-col overflow-hidden py-6">
          {children}
        </main>
      </div>
      {/* </div> */}
    </RouteGuard>
  );
}

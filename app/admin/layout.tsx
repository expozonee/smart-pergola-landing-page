import { AdminSideBar } from "@/components/Admin/AdminSideBar/AdminSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSideBar />
      <main className="relative w-full bg-lightDarkBlue">
        <SidebarTrigger className="text-white relative z-[9999]" />
        {children}
      </main>
    </SidebarProvider>
  );
}

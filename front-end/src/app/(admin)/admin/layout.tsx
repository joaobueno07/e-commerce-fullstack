import ContainerSidebar from "@/components/ContainerSidebar/ContainerSidebar";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <ContainerSidebar />
      <main className="w-full">
        <div className="w-full flex justify-between items-center border-b p-2 mb-3">
          <SidebarTrigger />

          <LogOut size={18} className="cursor-pointer" />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}

"use client";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";

type SideBarMenuItemClientProps = {
  children: React.ReactNode;
  slug: string;
};

export function SidebarMenuButtonClient({
  children,
  slug,
}: SideBarMenuItemClientProps) {
  const section = useParams().section;

  return (
    <SidebarMenuButton
      asChild
      className={`${slug === section ? "bg-primary" : ""}`}
    >
      {children}
    </SidebarMenuButton>
  );
}

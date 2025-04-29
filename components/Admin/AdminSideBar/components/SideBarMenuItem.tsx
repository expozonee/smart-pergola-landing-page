import Link from "next/link";
import * as react from "react";
import { LucideProps } from "lucide-react";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarMenuButtonClient } from "./SideBarMenuButtonClient";

type SideBarMenuItemProps = {
  item: {
    name: string;
    slug: string;
    icon: react.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
    >;
  };
};

export async function SideBarMenuItem({ item }: SideBarMenuItemProps) {
  return (
    <SidebarMenuItem key={item.name}>
      <SidebarMenuButtonClient slug={item.slug}>
        <Link href={`/admin/${item.slug}`}>
          <item.icon />
          <span>{item.name}</span>
        </Link>
      </SidebarMenuButtonClient>
    </SidebarMenuItem>
  );
}

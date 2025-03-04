import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { SideBarMenuItem } from "./components/SideBarMenuItem";
import { ADMIN_BUTTONS_DATA } from "../AdminButtons/adminButtons";
import { LandingPageConfiguration } from "@/db/configureLandingPage";
import { adminButtonObjCreator } from "@/utils/adminButtonObjCreator";

const adminButtons = ADMIN_BUTTONS_DATA.map((data) =>
  adminButtonObjCreator(data.name, data.type)
);

export async function AdminSideBar() {
  const { isCampaignConfigured } = await LandingPageConfiguration();

  return (
    <Sidebar side="right" className="border-none">
      <SidebarContent className="bg-darkBlue text-white">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Smart Pergola Logo"
            width={150}
            height={100}
            className="mx-auto"
            priority
          />
        </Link>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Admin Panel
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminButtons.map((item) => (
                <SideBarMenuItem key={item.name} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <h2>Configure status: {isCampaignConfigured ? "True" : "False"}</h2>
      </SidebarContent>
    </Sidebar>
  );
}

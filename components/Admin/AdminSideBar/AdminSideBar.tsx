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
import { LandingPageConfiguration } from "@/db/configureLandingPage";
import { adminButtonObjCreator } from "@/utils/adminButtonObjCreator";
import { ADMIN_BUTTONS_DATA } from "../AdminButtons/adminButtons";
import { auth } from "@/auth";
import { UserSectionSideBar } from "./UserSection";

const adminButtons = ADMIN_BUTTONS_DATA?.map((data) =>
  adminButtonObjCreator(data.name, data.type, data.hebrew_name)
);

export async function AdminSideBar() {
  const userAuth = await auth();
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
            לוח ניהול
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminButtons.map((item) => (
                <SideBarMenuItem key={item.name} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <h2 className="mx-auto mt-8">
          סטטוס : {isCampaignConfigured ? "מוגדר" : "לא מוגדר"}
        </h2>
        {
          <h2 className="mx-auto mt-4">
            שלום {userAuth?.user?.username === "moatasem" ? "מועתסם" : ""}
          </h2>
        }
        <UserSectionSideBar />
      </SidebarContent>
    </Sidebar>
  );
}

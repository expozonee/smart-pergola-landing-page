import { ADMIN_BUTTONS_DATA } from "@/components/Admin/AdminButtons/adminButtons";
import { ConfigForm } from "@/components/Admin/ConfigForm/ConfigForm";
import { NamesDashboard } from "@/components/NamesDashboard";
import { convertToSlug } from "@/utils/convertToSlug";
import { notFound } from "next/navigation";
import { use } from "react";

const ALLOWED_PATHS = ADMIN_BUTTONS_DATA.map((data) =>
  convertToSlug(data.name)
);

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export default function SectionPage({ params }: SectionPageProps) {
  const section = use(params).section;
  if (!ALLOWED_PATHS.includes(section)) notFound();

  return (
    <section className="absolute inset-0 h-screen flex items-start text-white">
      {section === "landing-page-config" ? <ConfigForm /> : <NamesDashboard />}
    </section>
  );
}

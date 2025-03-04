import { LandingForm } from "@/components/LandingForm/LandingForm";
import { LandingPageConfiguration } from "@/db/configureLandingPage";
import Image from "next/image";

export default async function Home() {
  const { isCampaignConfigured, data: campaignData } =
    await LandingPageConfiguration();

  return (
    <main className="h-screen relative flex lg:flex-row">
      <section className="absolute lg:static inset-0 lg:w-[75vw]">
        <Image
          src={
            "https://images.unsplash.com/photo-1570596649822-69c52927bf5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Image"
          width={1000}
          height={100}
          className="w-full h-screen object-cover"
        />
      </section>
      <section className="absolute w-full flex flex-col justify-center lg:static inset-0 lg:w-[25vw] p-6">
        <div className="bg-[rgb(255,255,255)]/80 rounded-lg">
          <Image
            className="w-[30%] mx-auto"
            src={"/logo.png"}
            height={100}
            width={150}
            alt="logo"
          />
          <h1 className="text-center text-xl font-bold">
            בואו נשב על כוס קפה!
          </h1>
          <div className="w-full mx-auto">
            <LandingForm
              isCampaignConfigured={isCampaignConfigured}
              campaignName={campaignData.name}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

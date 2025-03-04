"use client";
import { useState } from "react";
import { ConfigForm } from "@/components/Admin/ConfigForm/ConfigForm";

export function AdminPanel() {
  const [type, setType] = useState("config");

  return (
    <>
      {/* <AdminButtons type={type} setType={setType} /> */}
      <section className="text-center text-white mt-6">
        {/* {type === "config" ? (
          <section className="w-2/6 mt-12 mx-auto">
            <ConfigForm />
          </section>
        ) : (
          <h1>Names List</h1>
        )} */}
        <h1 className="text-[2rem]">
          Smart Pergola Landing Page Admin Dashboard
        </h1>
      </section>
    </>
  );
}

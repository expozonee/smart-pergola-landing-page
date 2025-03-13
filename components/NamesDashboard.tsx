import { NamesTable } from "./NamesTable/NamesTable";
import { columns } from "./NamesTable/columns";
import { use } from "react";
import { customers } from "@/db/customers";

export function NamesDashboard() {
  const { customers: customersData, years } = use(customers());

  return (
    <section className="mt-16 w-full text-center grid">
      <h3 className="my-3 text-[2rem]">רשימת לקוחות</h3>
      <NamesTable columns={columns} data={customersData} years={years} />
    </section>
  );
}

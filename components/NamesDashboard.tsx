import { User } from "@/types/User";

import { NamesTable } from "./NamesTable/NamesTable";
import { columns } from "./NamesTable/columns";
import { use } from "react";
import { customers } from "@/db/customers";

const date = new Date();

// const FAKE_DATA: User[] = [
//   {
//     fullName: "Bob",
//     phoneNumber: "0555555555",
//     date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
//     city: "עראבה",
//   },
// ];

export function NamesDashboard() {
  const { customers: customersData, years } = use(customers());

  return (
    <section className="mt-16 w-full text-center grid">
      <h3 className="my-3 text-[2rem]">רשימת לקוחות</h3>
      <NamesTable columns={columns} data={customersData} years={years} />
    </section>
  );
}

import { convertDate } from "@/utils/convertDate";
import { db } from "./db";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";

export type Customer = {
  fullName: string;
  phoneNumber: string;
  city: string;
  date: string;
};

const customersCollection = collection(db, "customers");

export async function customers() {
  // await addDoc(customersCollection, {
  //   fullName: "Walter",
  //   phoneNumber: "0548888888",
  //   city: "Haifa",
  //   dateAdded: Timestamp.fromDate(new Date("2024-11-01T00:00:00Z")),
  // });

  let years: number[] = [];
  const customersSnapShot = await getDocs(customersCollection);
  const customers = customersSnapShot.docs.map((customer) => {
    const date = new Date(customer.get("dateAdded").seconds * 1000);

    if (!years.includes(date.getFullYear())) years.push(date.getFullYear());
    return {
      fullName: customer.get("fullName"),
      phoneNumber: customer.get("phoneNumber"),
      city: customer.get("city"),
      date: convertDate(date),
    };
  }) as Customer[];

  return { customers, years };
}

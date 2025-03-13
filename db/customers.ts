import { convertDate } from "@/utils/convertDate";
import { db } from "./db";
import { collection, getDocs, Timestamp } from "firebase/firestore";

export type Customer = {
  fullName: string;
  phoneNumber: string;
  city: string;
  dateAdded: Timestamp;
  campaignName: string;
};

export type CustomerDisplay = Omit<Customer, "dateAdded"> & {
  date: string;
};

export const customersCollection = collection(db, "customers");

export async function customers() {
  const years: number[] = [];
  const customersSnapShot = await getDocs(customersCollection);
  const customers = customersSnapShot.docs.map((customer) => {
    const date = customer.get("dateAdded").toDate();
    if (!years.includes(date.getFullYear())) years.push(date.getFullYear());

    return {
      fullName: customer.get("fullName"),
      phoneNumber: customer.get("phoneNumber"),
      city: customer.get("city"),
      campaignName: customer.get("campaignName"),
      date: convertDate(date),
    };
  }) as CustomerDisplay[];

  return { customers, years };
}

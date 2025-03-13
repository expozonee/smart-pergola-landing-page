import { addDoc } from "firebase/firestore";
import { Customer, customersCollection } from "./customers";

export const addCustomerToDb = async (customer: Customer): Promise<void> => {
  try {
    const customerRef = await addDoc(customersCollection, customer);
    console.log(customerRef);

    console.log("Customer added successfully");
  } catch (error) {
    console.error("Error adding customer: ", error);
    throw error;
  }
};

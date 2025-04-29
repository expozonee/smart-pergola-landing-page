import { db } from "@/db/db";
import bcrypt from "bcryptjs";
import { collection, getDocs } from "firebase/firestore";

export type Admin = {
  username: string;
};

export async function getAdminFromDb(username: string, password: string) {
  const adminCollection = collection(db, "admin");
  const adminData = await getDocs(adminCollection);
  const admin = adminData.docs
    .map((admin) => {
      return admin.data();
    })
    .find((admin) => admin.username === username);
  const isAdminExist = !!admin;

  if (!isAdminExist) return null;

  const isPasswordCorrect = await bcrypt.compare(
    password,
    admin.hashedPassword
  );

  if (!isPasswordCorrect) return null;

  return {
    username: (admin as Admin).username,
  };
}

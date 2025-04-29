import { DefaultUser } from "next-auth";
import { Admin } from "./utils/getAdmin"; // adjust the path if needed

declare module "next-auth" {
  interface User extends DefaultUser, Admin {}
}

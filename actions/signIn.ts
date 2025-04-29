"use server";
import { signIn } from "@/auth";

export async function signInAction(data: FormData) {
  const { username, password } = Object.fromEntries(data.entries()) as {
    username: string;
    password: string;
  };

  const response = await signIn("credentials", {
    redirect: false,
    username,
    password,
  });

  return response;
}

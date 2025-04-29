/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { signInAction } from "@/actions/signIn";
import { signOutAction } from "@/actions/signOut";

export function useLogin() {
  const [isError, setIsError] = useState(false);

  async function login(data: FormData) {
    try {
      const response = await signInAction(data);
      return response;
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  }

  async function logout() {
    try {
      await signOutAction();
    } catch (e) {
      setIsError(true);
    }
  }

  return { isError, login, logout };
}

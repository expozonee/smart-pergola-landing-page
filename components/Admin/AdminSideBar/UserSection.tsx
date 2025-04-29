"use client";
import { signOutAction } from "@/actions/signOut";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function UserSectionSideBar() {
  const router = useRouter();

  async function handleClick() {
    try {
      await signOutAction();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button className="w-5/6 mx-auto bg-red-600" onClick={handleClick}>
      Sign out
    </Button>
  );
}

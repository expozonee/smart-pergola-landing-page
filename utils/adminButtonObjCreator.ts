import { List, Settings } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { convertToSlug } from "./convertToSlug";

export function adminButtonObjCreator(title: string, type: string) {
  return {
    name: title,
    type: type,
    icon: title === "Landing Page Config" ? Settings : List,
    slug: convertToSlug(title),
    onClick: (setType: Dispatch<SetStateAction<string>>) => setType(type),
  };
}

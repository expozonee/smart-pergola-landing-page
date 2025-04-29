import { List, Settings } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { convertToSlug } from "./convertToSlug";

export function adminButtonObjCreator(
  title: string,
  type: string,
  hebrew_name: string
) {
  return {
    name: hebrew_name,
    type: type,
    icon: title === "Landing Page Config" ? Settings : List,
    slug: convertToSlug(title),
    onClick: (setType: Dispatch<SetStateAction<string>>) => setType(type),
  };
}

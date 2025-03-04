import { Dispatch, SetStateAction } from "react";
import { adminButtonObjCreator } from "@/utils/adminButtonObjCreator";

const ADMIN_BUTTONS = [
  adminButtonObjCreator("Landing Page Config", "config"),
  adminButtonObjCreator("Names List", "names"),
];

type AdminButtonsProps = {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export function AdminButtons({ type, setType }: AdminButtonsProps) {
  return (
    <section className="w-[50%] mx-auto flex gap-6 justify-center mt-10">
      {ADMIN_BUTTONS.map((button, index) => {
        return (
          <button
            key={index}
            onClick={() => button.onClick(setType)}
            className={`w-[30%] px-10 py-2 border-primary border-2 rounded-md ${
              type === button.type ? "bg-primary text-white border-none" : ""
            }`}
          >
            {button.name}
          </button>
        );
      })}
    </section>
  );
}

import { AlertMessage } from "@/components/Alerts/Alert";
// import { ErrorAlert } from "@/components/Alerts/ErrorAlert";
// import { SuccessAlert } from "@/components/Alerts/SucessAlert";
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";

export type AlertState = {
  show: boolean;
  type: "success" | "error";
  message?: unknown | string | undefined;
};

export function useAlert() {
  const [showAlert, setShowAlert] = useState<AlertState>({
    show: false,
    type: "success",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert((prev) => {
        return {
          ...prev,
          show: false,
        };
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return [showAlert, setShowAlert, AlertMessage] as [
    AlertState,
    Dispatch<SetStateAction<AlertState>>,
    ({ type, message }: Omit<AlertState, "show">) => JSX.Element
  ];
}

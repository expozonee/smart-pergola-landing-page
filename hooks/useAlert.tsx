import { SuccessAlert } from "@/components/SuccessAlert/SucessAlert";
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";

export function useAlert() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return [showAlert, setShowAlert, SuccessAlert] as [
    boolean,
    Dispatch<SetStateAction<boolean>>,
    () => JSX.Element
  ];
}

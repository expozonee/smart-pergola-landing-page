import { CircleCheck } from "lucide-react";
import type { AlertState } from "@/hooks/useAlert";
import { Alert, AlertTitle } from "@/components/ui/alert";

export function AlertMessage({ type, message }: AlertState) {
  return (
    <Alert
      className="flex items-center gap-3"
      variant={`${type === "success" ? "success" : "destructive"}`}
    >
      <CircleCheck className="h-4 w-4" />
      <AlertTitle>
        {type === "success"
          ? "הבקשה שלך התקבלה בהצלחה!"
          : type === "error" && message
          ? `שגיאה!: ${message}`
          : "שגיאה!"}
      </AlertTitle>
    </Alert>
  );
}

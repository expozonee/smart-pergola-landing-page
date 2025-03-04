import { CircleCheck } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function SuccessAlert() {
  return (
    <Alert className="flex items-center gap-3" variant="success">
      <CircleCheck className="h-4 w-4" />
      <AlertTitle>הבקשה שלך התקבלה בהצלחה!</AlertTitle>
    </Alert>
  );
}

import { AlertMessage } from "./Alert";

type ErrorAlertProps = {
  message: string;
};

export function ErrorAlert({ message }: ErrorAlertProps) {
  return <AlertMessage type="error" message={message} />;
}

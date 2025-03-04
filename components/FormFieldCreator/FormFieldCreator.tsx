import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { JSX } from "react";
import { Input } from "../ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type FormFieldCreatorProps<FormSchema extends FieldValues> = {
  title: string;
  name: Path<FormSchema>;
  form: UseFormReturn<FormSchema>;
};

export function FormFieldCreator<FormSchema extends FieldValues>({
  title,
  name,
  form,
}: FormFieldCreatorProps<FormSchema>): JSX.Element {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md font-medium">{title}</FormLabel>
          <FormControl>
            <Input
              placeholder={title}
              {...field}
              className="bg-white text-black"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

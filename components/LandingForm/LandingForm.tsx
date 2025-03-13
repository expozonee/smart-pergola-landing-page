"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useAlert } from "@/hooks/useAlert";
import { formSchema } from "@/schema/formSchema";
import { FormFieldCreator } from "../FormFieldCreator/FormFieldCreator";
import { landingFormInputs } from "./landingFormInputs";
import { DEFAULT_VALUES } from "./defaultValues";
import { Customer } from "@/db/customers";
import { addCustomerToDb } from "@/db/addCustomerToDb";
import { Timestamp } from "firebase/firestore";

type LandingFormProps = {
  isCampaignConfigured: boolean;
  campaignName: string;
};

export function LandingForm({
  isCampaignConfigured,
  campaignName,
}: LandingFormProps) {
  const [showAlert, setShowAlert, AlertMessage] = useAlert();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const customerData = {
      ...values,
      campaignName,
      dateAdded: Timestamp.now(),
    } as Customer;

    try {
      await addCustomerToDb(customerData);
      setShowAlert({
        show: true,
        type: "success",
      });
      form.reset(DEFAULT_VALUES);
    } catch (error) {
      console.error(error);
      setShowAlert({
        show: true,
        type: "error",
      });
    }
  }

  return (
    <div className="mt-8 w-[80%] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {landingFormInputs.map((input, index) => {
            return (
              <FormFieldCreator
                key={index}
                form={form}
                title={input.title}
                name={input.name}
              />
            );
          })}
          <Button
            className="w-full bg-primary hover:bg-secondary"
            type="submit"
            disabled={!isCampaignConfigured}
          >
            אישור
          </Button>
        </form>
      </Form>
      <div className="mt-6">
        {showAlert.show && (
          <AlertMessage type={showAlert.type} message={showAlert.message} />
        )}
      </div>
    </div>
  );
}

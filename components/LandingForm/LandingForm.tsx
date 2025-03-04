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

type LandingFormProps = {
  isCampaignConfigured: boolean;
  campaignName: string;
};

export function LandingForm({
  isCampaignConfigured,
  campaignName,
}: LandingFormProps) {
  const [showAlert, setShowAlert, SuccessAlert] = useAlert();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const customerData = {
      ...values,
      campaignName,
    };

    console.log(customerData);
    setShowAlert(true);
    form.reset(DEFAULT_VALUES);
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

          {/* <FormFieldCreator form={form} title={"שם משפחה"} name="lastName" />
          <FormFieldCreator
            form={form}
            title={"מס' טלפון"}
            name="phoneNumber"
          />
          <FormFieldCreator form={form} title={"עיר"} name="city" /> */}

          {/* <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-medium">שם פרטי</FormLabel>
                <FormControl>
                  <Input placeholder="שם פרטי" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-medium">שם משפחה</FormLabel>
                <FormControl>
                  <Input placeholder="שם משפחה" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-medium">מס' טלפון</FormLabel>
                <FormControl>
                  <Input placeholder="מס' טלפון" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md font-medium">עיר</FormLabel>
                <FormControl>
                  <Input placeholder="עיר" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button
            className="w-full bg-primary hover:bg-secondary"
            type="submit"
            disabled={!isCampaignConfigured}
          >
            אישור
          </Button>
        </form>
      </Form>
      <div className="mt-6">{showAlert && <SuccessAlert />}</div>
    </div>
  );
}

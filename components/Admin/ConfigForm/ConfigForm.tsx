"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useAlert } from "@/hooks/useAlert";
import { configSchema } from "@/schema/configSchema";
import { DEFAULT_VALUES } from "./defaultValues";
import { FormFieldCreator } from "../../FormFieldCreator/FormFieldCreator";
import { configFormInputs } from "./configFormInputs";
import { LandingPageConfiguration } from "@/db/configureLandingPage";

export function ConfigForm() {
  const [showAlert, setShowAlert, AlertMessage] = useAlert();

  const form = useForm<z.infer<typeof configSchema>>({
    resolver: zodResolver(configSchema),
    defaultValues: DEFAULT_VALUES,
  });

  async function onSubmit(values: z.infer<typeof configSchema>) {
    const { updateConfig } = await LandingPageConfiguration();
    try {
      await updateConfig(values.campaignName);
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
        message: error,
      });
    }
  }

  return (
    <div className="mt-16 w-[80%] md:w-[50%] xl:w-[30%] mx-auto text-white">
      <h2 className="my-6 text-center text-[2rem]">הגדרת דף נחיתה</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {configFormInputs.map((input, index) => {
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

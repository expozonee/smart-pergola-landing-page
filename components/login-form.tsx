"use client";
import { z } from "zod";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";
import { formSchema } from "@/schema/loginFormSchema";
import { ErrorAlert } from "./Alerts/ErrorAlert";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { isError, login } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);

    try {
      const callbackurl = await login(formData);
      router.push(callbackurl || "/admin/names-list");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2 h-[650px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-6 md:p-24 my-auto"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">ברוך הבא</h1>
                  <p className="text-balance text-muted-foreground">
                    כניסה למערכת שמות
                  </p>
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>שם משתמש</FormLabel>
                        <FormControl>
                          <Input placeholder="שם משתמש" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>סיסמה</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="סיסמה"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full">
                  כניסה
                </Button>
                {isError && <ErrorAlert message="שם משתמש או סיסמה שגויים" />}
              </div>
            </form>
          </Form>

          <div className="relative hidden bg-muted md:block">
            <Image
              src="https://images.unsplash.com/photo-1570596649822-69c52927bf5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

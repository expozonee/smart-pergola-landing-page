import { z } from "zod";
import { isMobilePhone } from "validator";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "שם חובה" }),
  lastName: z.string().min(1, { message: "שם משפחה חובה" }),
  phoneNumber: z
    .string()
    .min(1, "מספר טלפון חובה")
    .refine((phoneNumber) => {
      return isMobilePhone(phoneNumber, "he-IL");
    }, "מספר טלפון לא חוקי"),
  city: z.string().min(1, "עיר חובה"),
});

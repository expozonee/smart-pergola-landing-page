import { z } from "zod";
import { isMobilePhone } from "validator";

export const formSchema = z.object({
  fullName: z.string().min(1, { message: "שם מלא חובה" }),
  phoneNumber: z
    .string()
    .min(1, "מספר טלפון חובה")
    .refine((phoneNumber) => {
      return isMobilePhone(phoneNumber, "he-IL");
    }, "מספר טלפון לא חוקי"),
  city: z.string().min(1, "עיר חובה"),
});

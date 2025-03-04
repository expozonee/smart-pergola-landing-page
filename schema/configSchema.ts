import { isDate, isNumeric } from "validator";
import { z } from "zod";

export const configSchema = z.object({
  title: z.string().min(5, "אורך כותרת חייבת להיות לפחות 5 אותיות"),
  year: z
    .string()
    .min(4, "שנה חייבת להיות 4 ספריות בדיוק")
    .max(4, "שנה חייבת להיות 4 ספריות בדיוק")
    .refine((year) => isNumeric(year), "שנה חייבת להיות מספרים בלבד")
    .refine(
      (year) => year === new Date().getFullYear().toString(),
      "שנה חייבת להיות את השנה הנוכחית"
    ),
});

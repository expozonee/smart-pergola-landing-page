import { z } from "zod";

export const configSchema = z.object({
  campaignName: z.string().min(5, "אורך כותרת חייבת להיות לפחות 5 אותיות"),
});

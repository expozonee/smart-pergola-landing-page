import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, "שם משתמש חייב להיות 2 אותיות לפחות").max(50),
  password: z.string().min(8, "אורך הסיסמה חייב להיות 8 לפחות").max(30),
});

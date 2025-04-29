import bcrypt from "bcryptjs";

export async function saltAndHashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
}

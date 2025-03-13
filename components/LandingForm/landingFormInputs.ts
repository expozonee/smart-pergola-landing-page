import { DEFAULT_VALUES } from "./defaultValues";

type LandingFormInputs = {
  name: keyof typeof DEFAULT_VALUES;
  title: string;
};

export const landingFormInputs: LandingFormInputs[] = [
  {
    name: "fullName",
    title: "שם פרטי",
  },
  {
    name: "phoneNumber",
    title: "מס' טלפון",
  },
  {
    name: "city",
    title: "עיר",
  },
];

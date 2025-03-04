import { DEFAULT_VALUES } from "./defaultValues";

type LandingFormInputs = {
  name: keyof typeof DEFAULT_VALUES;
  title: string;
};

export const landingFormInputs: LandingFormInputs[] = [
  {
    name: "firstName",
    title: "שם פרטי",
  },
  {
    name: "lastName",
    title: "שם משפחה",
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

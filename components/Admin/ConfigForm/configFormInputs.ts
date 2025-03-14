import { DEFAULT_VALUES } from "./defaultValues";

type ConfigFormInput = {
  name: keyof typeof DEFAULT_VALUES;
  title: string;
};

export const configFormInputs: ConfigFormInput[] = [
  {
    name: "campaignName",
    title: "שם",
  },
];

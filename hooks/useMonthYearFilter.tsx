import { Dispatch, SetStateAction, useState } from "react";

/** Month and year filter for the names table. */
export function useMonthYearFilter() {
  const [monthAndYearFilter, setMonthAndYearFilter] = useState<{
    month: string | undefined;
    year: string | undefined;
  }>({
    month: undefined,
    year: undefined,
  });

  const isFilterActive =
    !!monthAndYearFilter.month || !!monthAndYearFilter.year;

  return [isFilterActive, monthAndYearFilter, setMonthAndYearFilter] as [
    boolean,
    {
      month: string | undefined;
      year: string | undefined;
    },
    Dispatch<
      SetStateAction<{
        month: string | undefined;
        year: string | undefined;
      }>
    >
  ];
}

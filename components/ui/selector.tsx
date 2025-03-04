import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";

type MonthFilter = {
  title: "month";
};
type YearFilter = {
  title: "year";
  data: number[];
};

type SelectorProps<TData> = {
  table: Table<TData>;
  filter: { month: string | undefined; year: string | undefined };
  updateFilter: Dispatch<
    SetStateAction<{
      month: string | undefined;
      year: string | undefined;
    }>
  >;
} & (MonthFilter | YearFilter);

export function SelectScrollable<TData>(props: SelectorProps<TData>) {
  const { title, table, filter, updateFilter } = props;

  return (
    <>
      <Select
        dir="rtl"
        value={title === "month" ? filter.month || "" : filter.year || ""}
        onValueChange={(value) => {
          updateFilter((prev) => {
            const newFilter =
              title === "month"
                ? { ...prev, month: value }
                : { ...prev, year: value };

            const monthFilter = newFilter.month ? `/${newFilter.month}` : "";
            const yearFilter = newFilter.year ? `/${newFilter.year}` : "";

            table
              .getColumn("date")
              ?.setFilterValue(`${monthFilter}${yearFilter}`);

            return newFilter;
          });
        }}
      >
        <SelectTrigger className="w-[280px] bg-white text-black">
          <SelectValue placeholder={`Select a ${title}`} className="w-[30%]" />
        </SelectTrigger>
        <SelectContent>
          {title === "month"
            ? [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
              ].map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))
            : props.data.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
        </SelectContent>
      </Select>
    </>
  );
}

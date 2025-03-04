"use client";

import { useState } from "react";
import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { GoToPage } from "./GoToPage";
import { PageNumbering } from "./PageNumbering";
import { SelectScrollable } from "../ui/selector";
import { useMonthYearFilter } from "@/hooks/useMonthYearFilter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  years: number[];
}

export function NamesTable<TData, TValue>({
  columns,
  data,
  years,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [isFilterActive, filter, updateFilter] = useMonthYearFilter();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="w-[85%] mx-auto">
      <section className="flex justify-center items-center gap-6 w-full">
        <div className="flex  w-full gap-2 flex-col [&>*]:w-full md:flex-row items-center py-4 lg:[&>*]:w-[35%]">
          <Input
            placeholder="Filter cities..."
            value={(table.getColumn("city")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("city")?.setFilterValue(event.target.value)
            }
            className="w-full bg-white text-black"
          />
          <SelectScrollable
            table={table}
            filter={filter}
            title="month"
            updateFilter={updateFilter}
          />
          <SelectScrollable
            table={table}
            filter={filter}
            title="year"
            data={years}
            updateFilter={updateFilter}
          />
          {isFilterActive && (
            <Button
              onClick={() => {
                updateFilter({
                  month: undefined,
                  year: undefined,
                });
                table.resetColumnFilters();
              }}
            >
              Clear
            </Button>
          )}
        </div>
        {/* <div className="flex gap-3">
            <SelectScrollable
              table={table}
              filter={filter}
              title="month"
              updateFilter={updateFilter}
            />
            <SelectScrollable
              table={table}
              filter={filter}
              title="year"
              data={years}
              updateFilter={updateFilter}
            />
            {isFilterActive && (
              <Button
                onClick={() => {
                  updateFilter({
                    month: undefined,
                    year: undefined,
                  });
                  table.resetColumnFilters();
                }}
              >
                Clear
              </Button>
            )}
          </div> */}
      </section>
      <div className="rounded-md border">
        <Table className="bg-white text-black">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center text-black justify-end space-x-2 py-4">
        <PageNumbering table={table} />
        <GoToPage table={table} />
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

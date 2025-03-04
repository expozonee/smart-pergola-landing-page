import { TableType } from "@/types/Table";

type PageNumberingProps<TData> = TableType<TData>;

export function PageNumbering<TData>({ table }: PageNumberingProps<TData>) {
  return (
    <span className="flex items-center gap-1 px-2 text-white">
      <div>דף</div>
      <strong>
        {table.getState().pagination.pageIndex + 1} מ{" "}
        {table.getPageCount().toLocaleString()}
      </strong>
    </span>
  );
}

import { TableType } from "@/types/Table";

type GoToPageProps<TData> = TableType<TData>;

export function GoToPage<TData>({ table }: GoToPageProps<TData>) {
  return (
    <span className="flex items-center gap-1 text-white">
      | לך לדף
      <input
        type="number"
        min="1"
        max={table.getPageCount()}
        defaultValue={table.getState().pagination.pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          table.setPageIndex(page);
        }}
        className="border p-1 rounded w-16 text-black"
      />
    </span>
  );
}

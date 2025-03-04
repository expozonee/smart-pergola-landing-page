export function filterSelectionObjCreator(
  types: ("month" | "year")[],
  data: number[]
) {
  return types.map((type) => {
    if (type === "month") {
      return {
        type,
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      };
    }
    return {
      type,
      data,
    };
  });
}

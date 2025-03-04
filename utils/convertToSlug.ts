export function convertToSlug(text: string) {
  return text.split(" ").join("-").toLowerCase();
}

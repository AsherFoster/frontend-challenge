export function currency(num: number): string {
  return '$' + (Math.round(num * 100)) / 100;
}

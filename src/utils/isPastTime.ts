export default function isPastTime(date: string): boolean {
  const now = new Date();
  const dateToCompare = new Date(date);
  return dateToCompare < now;
}

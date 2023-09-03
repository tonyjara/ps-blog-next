import { format } from "date-fns";

export function formatDate(date: Date, pattern = "PPP") {
  return format(new Date(date), pattern);
}

export function convertToDate(dateString: string) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("/");
  let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
  return dat;
}

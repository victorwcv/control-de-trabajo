import { format, parseISO } from "date-fns";

export const currentDateFormated = () => {
  const todayUTC = new Date().toISOString();
  const date = parseISO(todayUTC);
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
}

export const dateFormated = (date) => {
  const dateFormated = parseISO(date);
  return format(dateFormated, "yyyy-MM-dd'T'HH:mm:ss");
}


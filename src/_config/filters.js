import { DateTime } from "luxon";

export const date = (dateObj, format = "yyyy-MM-dd") => {
  return DateTime.fromJSDate(dateObj).toFormat(format);
};


// Lokalizace datumů
export const localizedDate = (dateObj, lang = "en") => {
  const formatter = new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(dateObj);
};

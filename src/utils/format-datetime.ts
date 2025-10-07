// export function formatDatetime(datetime: Date): string {
//   return datetime.toLocaleDateString("pt-BR", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });
// }

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rowDate: string): string {
  const date = new Date(rowDate);

  return format(date, "dd/MM/yyyy 'ás' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatRelativeDate(rowDate: string): string {
  const date = new Date(rowDate);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

const rawDate = new Date();
const formattedDate = formatRelativeDate("2025-10-01T17:40:19.376Z");
console.log(rawDate, "\n", formattedDate);

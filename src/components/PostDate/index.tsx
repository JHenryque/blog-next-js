import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-sm/tight text-slate-500 "
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
    >
      <div className="flex gap-1 justify-between">
        <span>{formatDatetime(dateTime)}</span>
        <span>{formatRelativeDate(dateTime)}</span>
      </div>
    </time>
  );
}

import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import PostHeading from "../PostHeading.index";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};
export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-sm/tight text-slate-500 "
        dateTime={createdAt}
        title={createdAt && formatRelativeDate(createdAt)}
      >
        <div className="flex gap-1 justify-between">
          <span>{createdAt && formatDatetime(createdAt)}</span>
          <span>{createdAt && formatRelativeDate(createdAt)}</span>
        </div>
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}

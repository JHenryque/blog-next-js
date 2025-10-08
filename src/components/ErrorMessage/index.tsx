import { clsx } from "clsx";

type ErrorMessageProps = {
  pageTile: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTile,
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTile}</title>
      <div
        className={clsx(
          "min-h-[320px] bg-slate-900 text-slate-100",
          "mb-16 p-8 rounded-xl",
          "flex items-center justify-center",
          "text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/normal mb-8 font-extrabold">
            {contentTitle}
          </h1>
          <div className="text-3xl/normal">{content}</div>
        </div>
      </div>
    </>
  );
}

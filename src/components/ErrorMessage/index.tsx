import { clsx } from "clsx";
import Link from "next/link";

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
          <div className="text-3xl/normal">
            {content}
            <br />
            <span className="text-2xl/normal">
              click a{" "}
              <Link
                className="hover:underline font-extrabold text-red-500 mb-16"
                href="/"
              >
                Aqui
              </Link>{" "}
              Para Voltar
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

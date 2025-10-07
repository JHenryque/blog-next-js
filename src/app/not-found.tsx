import clsx from "clsx";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        "min-h-[320px] bg-slate-900 text-slate-100",
        "mb-16 p-8 rounded-xl",
        "flex items-center justify-center",
        "text-center"
      )}
    >
      <div>
        <h1 className="text-7xl/normal mb-8 font-extrabold">404</h1>
        <p className="text-3xl/normal">
          Error 404 - A página não foi encontrada ou não existe
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
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-3xl font-bold text-white mt-15 pb-16 bg-slate-400 text-center">
      CopyRight &copy; Todos os direitos reservados {new Date().getFullYear()} -{" "}
      <Link className="hover:underline text-slate-900" href="/">
        The Blog
      </Link>
    </footer>
  );
}

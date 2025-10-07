import clsx from "clsx";
import Link from "next/link";

export default function Headers() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl/normal font-extrabold my-8",
          "sm:text-5xl/normal sm:my-10",
          "md:text-6xl/normal md:my-11",
          "lg:text-7xl/normal lg:my-12"
        )}
      >
        <Link href="/">The Blog</Link>
      </h1>
    </header>
  );
}

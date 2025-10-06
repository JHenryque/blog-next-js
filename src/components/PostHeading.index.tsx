import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2" | "h3";
};

export default function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: Readonly<PostHeadingProps>) {
  return (
    <Tag className="text-4xl/light font-extrabold sm:text-4xl">
      <Link href={url}>{children}</Link>
    </Tag>
  );
}

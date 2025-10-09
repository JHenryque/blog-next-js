import { findAllBySlugPostsCached } from "@/lib/post/queries";
import Link from "next/link";
import Image from "next/image";
import { PostDate } from "../PostDate";
import PostHeading from "../PostHeading.index";
import SafeMarkDown from "../SafeMarkDown";
import { createImageSrc } from "@/utils/create-image-src";

type SimglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SimglePostProps) {
  const post = await findAllBySlugPostsCached(slug);
  return (
    <article>
      <Link href="/">Voltar</Link>
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          width={1200}
          height={720}
          src={createImageSrc(post.coverImageUrl)}
          alt={post.title}
          className="rounded-xl"
        />
        <div className="flex justify-between text-slate-500">
          {<PostDate dateTime={post.createdAt} />} {post.author}
        </div>
        <PostHeading url={""}>{post.title}</PostHeading>
      </header>
      <p className="text-xl mb-4 text-slate-600">{post.excerpt}</p>

      <SafeMarkDown markdown={post.content} />
    </article>
  );
}

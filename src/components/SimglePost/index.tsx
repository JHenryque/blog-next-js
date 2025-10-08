import { findAllBySlugPostsCached } from "@/lib/post/queries";
import { PostSummary } from "../PostSummary";
import Link from "next/link";

type SimglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SimglePostProps) {
  const post = await findAllBySlugPostsCached(slug);
  return (
    <section>
      <Link href="/">Voltar</Link>
      <div>
        <img src={post.coverImageUrl} alt={post.title} />

        <PostSummary
          postHeading="h1"
          postLink={`/post/${post.slug}`}
          createdAt={post.createdAt}
          title={post.title}
          excerpt={post.excerpt}
        />

        <p>{post.content}</p>
        <p>{post.author}</p>
      </div>
    </section>
  );
}

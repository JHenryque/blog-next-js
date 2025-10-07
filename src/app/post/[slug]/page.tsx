import { PostSummary } from "@/components/PostSummary";
import { findAllBySlugPostsCached } from "@/lib/post/queries";
import { formatDatetime } from "@/utils/format-datetime";
import Link from "next/link";
import { notFound } from "next/navigation";

type PostSlugPageParams = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageParams) {
  const { slug } = await params;

  let post;

  try {
    post = await findAllBySlugPostsCached(slug);
  } catch (error) {
    //throw new Error(`Post with slug ${slug} not found`);
    post = undefined;
  }

  if (!post) notFound();

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

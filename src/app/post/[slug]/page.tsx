import { PostSummary } from "@/components/PostSummary";
import { findAllBySlugPostsCached } from "@/lib/post/queries";
import { Metadata } from "next";
import Link from "next/link";

type PostSlugPageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await findAllBySlugPostsCached(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageParams) {
  const { slug } = await params;
  const post = await findAllBySlugPostsCached(slug);

  // varia forma de pegar o post pelo slug
  // let post;
  // try {
  //   post = await findAllBySlugPostsCached(slug);
  // } catch (error) {
  //   //throw new Error(`Post with slug ${slug} not found`);
  //   post = undefined;
  // }

  // const post = await findAllBySlugPostsCached(slug).catch(() => undefined);
  // if (!post) notFound();

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

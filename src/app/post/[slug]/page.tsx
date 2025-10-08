import { SinglePost } from "@/components/SimglePost";
import { SpindLoader } from "@/components/SpinLoader";
import { findAllBySlugPostsCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

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
    <Suspense fallback={<SpindLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}

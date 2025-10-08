import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic()
);

// outras formas de pegar o post com condiçao
// export const findAllBySlugPostsCached = cache(
//   async (slug: string) => await postRepository.findBySlug(slug)
// );

export const findAllBySlugPostsCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findAllByIdPostsCached = cache(
  async (id: string) => await postRepository.findById(id)
);

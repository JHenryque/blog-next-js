import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading.index";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "asdfasdf";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-5 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt="2025-10-05"
        title="Lorem ipsum dolor sit amet"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, autem."
      />
    </section>
  );
}

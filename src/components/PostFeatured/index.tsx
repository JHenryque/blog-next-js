import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading.index";

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

      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-sm/tight text-slate-500" dateTime="2025-10-05">
          05/04/2025 - 10:00 {""}
        </time>
        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet
        </PostHeading>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          sequi quod obcaecati harum aut quaerat commodi asperiores repudiandae
          necessitatibus numquam? Voluptatem consequatur quae dolorem itaque hic
          fugiat atque placeat tempore.
        </p>
      </div>
    </section>
  );
}

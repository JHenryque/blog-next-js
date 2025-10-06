import { postRepository } from "@/repositories/post";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading.index";
import { time } from "console";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-col-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div className="flex flex-col gap-4 group" key={post.id}>
          <PostCoverImage
            linkProps={{
              href: `/post/${post.slug}`,
            }}
            imageProps={{
              width: 1200,
              height: 720,
              src: post.coverImageUrl,
              alt: post.title,
            }}
          />
          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-sm/tight text-slate-500"
              dateTime={post.createdAt}
            >
              {post.createdAt && new Date(post.createdAt).toLocaleDateString()}
            </time>
            <PostHeading url="#" as="h2">
              {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

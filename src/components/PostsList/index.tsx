import { createImageSrc } from "@/utils/create-image-src";
import PostCoverImage from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostsList() {
  const posts = await findAllPublicPostsCached();

  return (
    <div className="grid grid-col-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: createImageSrc(post.coverImageUrl),
                alt: post.title,
              }}
            />

            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />

            {/* <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-sm/tight text-slate-500 "
                dateTime={post.createdAt}
                title={post.createdAt && formatRelativeDate(post.createdAt)}
              >
                <div className="flex gap-1 justify-between">
                  <span>
                    {post.createdAt && formatDatetime(post.createdAt)}
                  </span>
                  <span>
                    {post.createdAt && formatRelativeDate(post.createdAt)}
                  </span>
                </div>
              </time>

              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>

              <p>{post.excerpt}</p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

import { postRepository } from "@/repositories/post";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading.index";
import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { PostSummary } from "../PostSummary";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-col-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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
                src: post.coverImageUrl,
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

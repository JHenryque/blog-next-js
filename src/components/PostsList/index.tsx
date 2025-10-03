import { postRepository } from "@/repositories/post";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
    </ul>
  );
}

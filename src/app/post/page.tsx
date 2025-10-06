import { postRepository } from "@/repositories/post";

export default async function PostsPage({ params }: Readonly<{ params: any }>) {
  const posts = await postRepository.findById(params);

  return (
    <section>
      <div>
        <h1>{posts.title}</h1>
        <p>{posts.content}</p>
      </div>
    </section>
  );
}

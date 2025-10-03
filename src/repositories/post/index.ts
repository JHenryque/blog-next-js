import { JsonPostRepository } from "./json-post-repository";
import { PostRespository } from "./post-repository";

export const postRepository: PostRespository = new JsonPostRepository();

// (async () => {
//   // const posts = await postRepository.findAll();
//   // posts.forEach((post) => console.log(post.id));

//   const posts = await postRepository.findById(
//     "99f8add4-7684-4c16-a316-616271db199e"
//   );
//   console.log(posts);
// })();

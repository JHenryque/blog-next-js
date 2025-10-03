import { PostModel } from "@/models/post/post-model";
import { PostRespository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { log } from "console";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRepository implements PostRespository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }
}

export const postRepository: PostRespository = new JsonPostRepository();

// (async () => {
//   // const posts = await postRepository.findAll();
//   // posts.forEach((post) => console.log(post.id));

//   const posts = await postRepository.findById(
//     "99f8add4-7684-4c16-a316-616271db199e"
//   );
//   console.log(posts);
// })();

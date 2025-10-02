import { PostModel } from "@/models/post/post-model";
import { PostRespository } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRespository {
  private async readFromDisk() {
    // const data = await import(`${ROOT_DIR}/db/seed/posts.json`);
    // return data.posts;
  }

  async findAll(): Promise<PostModel[]> {
    // const response = await fetch("http://localhost:3000/api/posts");
    // return response.json();
  }
}

export const jsonPostRepository = new JsonPostRepository();

console.log(ROOT_DIR);

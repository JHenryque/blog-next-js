import { PostModel } from "@/models/post/post-model";
import { PostRespository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

// routa da raiz do projeto
const ROOT_DIR = process.cwd();

// rotas do arquivo do post
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRespository {
  // simulando o delay
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  // chamando o json de posts
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  // pegar todos os posts
  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts.filter((post: { published: boolean }) => post.published);
  }

  // pegar o post pelo id
  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();

    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateWait();

    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error(`Post with slug ${slug} not found`);

    return post;
  }
}

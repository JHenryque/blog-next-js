import { PostModel } from "@/models/post/post-model";
import { PostRespository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRespository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
    // const query = drizzleDb.select().from(postsTable);
    // query.where(eq(postsTable.published, true));
    // console.log(query.toSQL().sql);
    // console.log(query.toSQL().params);
  }
  async findBySlug(id: string): Promise<PostModel> {}
  async findBySlugPublic(slug: string): Promise<PostModel> {}
  async findAll(): Promise<PostModel[]> {}
  async findById(id: string): Promise<PostModel> {}
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach((post) => console.log(post.slug, post.published));
})();

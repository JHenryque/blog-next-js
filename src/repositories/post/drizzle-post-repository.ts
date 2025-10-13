import { PostModel } from "@/models/post/post-model";
import { PostRespository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { notFound } from "next/navigation";

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

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post not found");

    return post;
  }

  async findBySlug(id: string): Promise<PostModel> {}
  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) notFound();

    return post;
  }
}

/*
    rotina-matinal-de-pessoas-altamente-eficazes true
    dicas-para-manter-a-saude-mental-em-dia true
    99f8add4-7684-4c16-a316-616271db199e true
    afa086e4-53e4-492d-acf2-7c2966d83fcd true

*/

// (async () => {
//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAllPublic();
//   // posts.forEach((post) => console.log(post.id, post.published));

//   const post = await repo.findBySlugPublic(
//     "rotina-matinal-de-pessoas-altamente-eficazes"
//   );
//   console.log(post);

//   const post1 = await repo.findById("afa086e4-53e4-492d-acf2-7c2966d83fcd");
//   console.log(post1);

//   //await repo.findBySlugPublic("asdasdad");
// })();

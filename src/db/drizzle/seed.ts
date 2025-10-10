import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schema";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // ISSO LIMPA A BASE DE DADOS
    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} posts foram salvos na base de dados.`);
    console.log();

    //    const posts = await drizzleDb.select().from(postsTable);
    //    posts.forEach(post => {
    //     console.log(post.slug);
    //   });
  } catch (error) {
    console.log("\n", "Ocorreu unm erro ao inserir os posts \n", error);
  }
})();

import { PostModel } from "@/models/post/post-model";

export interface PostRespository {
  findAll(): Promise<PostModel[]>;
  //getPostBySlug(slug: string): Promise<PostModel>;
}

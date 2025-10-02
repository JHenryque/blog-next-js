export type PostModel = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  published: boolean;
  createdAt: string; // pode ser Date se você quiser converter
  updatedAt: string; // pode ser Date também
  author: string;
};

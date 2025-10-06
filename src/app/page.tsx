import Container from "@/components/Container";
import Headers from "@/components/Headers";
import PostCoverImage from "@/components/PostCoverImage";
import PostHeading from "@/components/PostHeading.index";
import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Headers />
        <section className="grid grid-cols-1 gap-5 mb-16 sm:grid-cols-2 group">
          <PostCoverImage
            linkProps={{
              href: "/post/asdfasdf",
            }}
            imageProps={{
              width: 1200,
              height: 720,
              src: "/images/bryen_9.png",
              alt: "Alt da imagem",
              priority: true,
            }}
          />

          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-sm/tight text-slate-500"
              dateTime="2025-10-05"
            >
              05/04/2025 - 10:00 {""}
            </time>
            <PostHeading url="#" as="h1">
              Lorem ipsum dolor sit amet
            </PostHeading>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, sequi quod obcaecati harum aut quaerat commodi
              asperiores repudiandae necessitatibus numquam? Voluptatem
              consequatur quae dolorem itaque hic fugiat atque placeat tempore.
            </p>
          </div>
        </section>
        <main className="container py-7 mx-auto bg-slate-300">
          <ul>
            <Suspense fallback={<SpindLoader />}>
              <PostsList />
            </Suspense>
          </ul>
        </main>
        <footer className="text-3xl font-bold text-white">
          &copy; Todos os direitos reservados
        </footer>
      </Container>
    </>
  );
}

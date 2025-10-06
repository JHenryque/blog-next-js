import Container from "@/components/Container";
import Headers from "@/components/Headers";
import PostHeading from "@/components/PostHeading.index";
import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Headers />
        <section className="grid grid-cols-1 gap-5 mb-16 sm:grid-cols-2 group">
          <Link
            className="w-full h-full overflow-hidden rounded-xl"
            href="/about"
          >
            <Image
              className="w-full h-full group-hover:scale-105 transition-all object-cover"
              src="/images/bryen_0.png"
              width={1200}
              height={720}
              alt="Titulo do post"
              priority
            />
          </Link>
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

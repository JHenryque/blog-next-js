import Container from "@/components/Container";
import Headers from "@/components/Headers";
import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Headers />
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

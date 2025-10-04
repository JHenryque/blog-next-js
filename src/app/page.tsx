import Container from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <header className="text-3xl font-bold text-white">Header</header>
      <Container>
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

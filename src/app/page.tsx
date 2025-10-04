import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <header className="text-3xl font-bold text-white">Header</header>
      <main className="contain-content flex flex-col gap-4 py-7 min-h-screen">
        <ul>
          <Suspense fallback={<SpindLoader />}>
            <PostsList />
          </Suspense>
        </ul>
      </main>
      <footer className="text-3xl font-bold text-white">
        &copy; Todos os direitos reservados
      </footer>
    </>
  );
}

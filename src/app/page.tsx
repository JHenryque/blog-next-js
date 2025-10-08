import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <PostFeatured />

      <main className="container py-7 mx-auto bg-slate-300">
        <ul>
          <Suspense fallback={<SpindLoader />}>
            <PostsList />
          </Suspense>
        </ul>
      </main>
    </>
  );
}

import { ClientComponent } from "@/components/ClientComponent";
import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { ServerComponent } from "@/components/ServerComponent";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <main className="container py-7 mx-auto bg-slate-300">
        <Suspense fallback={<SpindLoader />}>
          <PostFeatured />
          <PostsList />
        </Suspense>
      </main>
    </>
  );
}

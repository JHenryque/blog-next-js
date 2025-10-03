import { PostsList } from "@/components/PostsList";
import { SpindLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <section className="conatiner-fluid flex justify-center">
      <div className="container text-center bg-blue-950 py-7">
        <h1 className="text-3xl font-bold text-white">Home</h1>
        <ul>
          <Suspense fallback={<SpindLoader />}>
            <PostsList />
          </Suspense>
        </ul>
      </div>
    </section>
  );
}

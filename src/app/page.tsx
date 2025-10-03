import Headers from "@/components/Headers";
import { SpindLoader } from "@/components/SpinLoader";

export default function HomePage() {
  console.log("Home Page");
  return (
    <section className="conatiner-fluid flex justify-center">
      <div className="container text-center bg-blue-950 py-7">
        <SpindLoader />
      </div>
    </section>
  );
}

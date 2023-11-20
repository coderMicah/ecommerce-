import Hero from "./components/Hero";
import Latest from "./components/Latest";

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Latest />
    </main>
  );
}

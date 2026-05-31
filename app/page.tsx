import Hero from "@/components/landing page/hero";
import Mission from "@/components/landing page/mission";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Mission />
    </main>
  );
}

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import HeroSection2 from "./components/HeroSection2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
    </main>
  );
}

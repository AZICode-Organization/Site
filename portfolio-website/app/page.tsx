import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import HeroSection2 from "./components/HeroSection2";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}

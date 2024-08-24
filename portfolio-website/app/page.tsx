import HeroSection from "./components/HeroSection";
import HeroSectionV2 from "./components/HeroSectionV2";
import HeroSectionV22 from "./components/HeroSectionV2-2";
import HeroSectionV23 from "./components/HeroSectionV2-3";
import HeroSectionV24 from "./components/HeroSectionV2-4";
import HeroSectionV25 from "./components/HeroSectionV2-5";
import HeroSection1 from "./components/HeroSection1";
import HeroSection11 from "./components/HeroSection1-1";
import HeroSection12 from "./components/HeroSection1-2";
import HeroSection13 from "./components/HeroSection1-3";
import HeroSection14 from "./components/HeroSection1-4";
import HeroSectionV1 from "./components/HerosectionV1";
import HeroSectionV12 from "./components/HeroSectionV1-2";
import HeroSectionV26 from "./components/HeroSectionV2-6";

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSection />
        <br />
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Imagem de background */}
          <Image src="/images/GirlHero2.jpg" alt="Hero Image" className="absolute"  layout="fill" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSectionV1 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <HeroSection1 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Vídeo de background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/images/Video4.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSection14 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSection11 />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Imagem de background */}
          <Image src="/images/GirlHero3.jpg" alt="Hero Image" className="absolute"  layout="fill" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSectionV1 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSectionV12 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Imagem de background */}
          <Image src="/images/GirlHero2.jpg" alt="Hero Image" className="absolute"  layout="fill" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSectionV26 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSection12 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSection13 />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Vídeo de background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/images/Science-Logo.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSection14 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <HeroSectionV2 />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Vídeo de background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/images/Video2.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSection14 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSectionV22 />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Vídeo de background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSection14 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSectionV23 />
        <br />
        <br />
        <div className="relative px-12 py-4 -mx-20">
          {/* Vídeo de background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/images/Video3.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="relative z-10 px-12"><HeroSection14 /></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSectionV24 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeroSectionV25 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

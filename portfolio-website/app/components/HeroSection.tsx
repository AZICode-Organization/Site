"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        {/* Coluna de texto */}
        <div className="col-span-5 place-self-center text-left sm:text-left px-3 sm:px-16">
          <h1 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extralight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-teal-400">
            <Image src="/images/logo.svg" alt="Logo"  width={250} height={0} />
            </span>
            <TypeAnimation
              sequence={[
                'Softwares',
                1000,
                'Web Sites',
                1000,
                'UX Design',
                1000,
                'Chat Bots',
                1000,
                'SEO',
                1000,
                'Consultoria',
                1000,
                'Treinamentos',
                1000,
                'Manutenção',
                1000,
                'Hospedagem',
                1000,
                'Suporte',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black mb-6 text-base sm:text-lg lg:text-xl font-semibold sm:font-normal">
            Soluções digitais inovadoras para impulsionar o seu negócio. Especializados em transformar ideias em realidade.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-teal-400 hover:bg-slate-200 text-white">
              Solicitar Proposta
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-300 text-black border border-gray-800 mt-3">
              Ver Portfólio
            </button>
          </div>
        </div>
      </div>

      {/* Vídeo de background */}
      <div className="absolute inset-0 w-full h-full sm:static sm:col-span-7 flex justify-end">
        <video
          autoPlay
          loop
          muted
          controls={false}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none sm:opacity-100 opacity-75 sm:translate-x-0 translate-x-44"
        >
          <source src="/images/white.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
  );
}

export default HeroSection;

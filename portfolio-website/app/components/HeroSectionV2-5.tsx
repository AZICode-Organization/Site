"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


//todo fazer um pre carregamento dizendo we are AZI CODE
//Soluções de Tecnologia que Impulsionam Seu Negócio // Onde a Inovação Encontra a Excelência //Inteligência para impulsionar o seu negócio
// tentar colocar o video embaixo do texto, testar com o tesxto parado ou animado
// tentar com somente a imagem mexendo
// tentar com a imagem de algum mascote, ou mockup, ou imagem qualquer
// tentar com texto alterando entre os serviços
// animações: npmjs.com/package/react-type-animation
// https://react-type-animation.netlify.app/examples
const HeroSectionV25 = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AZI Code</span> */}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">AZI Code</span> */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-teal-400">AZI Code</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Softwares',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Sites',
                1000,
                'UX Design',
                1000,
                'Chat Bots',
                1000,
                'SEO',
                1000,
                'Marketing Digital',
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
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl ">
            Soluções digitais inovadoras para impulsionar o seu negócio. Especializados em transformar ideias em realidade.
          </p>
          <div>
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Solicitar Proposta</button> */}
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-teal-400 hover:bg-green-600 text-black">Solicitar Proposta</button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Ver Portfólio</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/hero.png" alt="Hero Image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " width={500} height={500} layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionV25

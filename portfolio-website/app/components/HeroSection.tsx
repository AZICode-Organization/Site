import React from 'react'
import Image from 'next/image'

//todo fazer um pre carregamento dizendo we are AZI CODE
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Bem-vindo à AZI Code</h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl ">
            Soluções digitais inovadoras para impulsionar o seu negócio. Especializados em transformar ideias em realidade.
          </p>
          <div>
            <button>Solicitar Proposta</button>
            <button>Ver Portfólio</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image src="/images/hero.png" alt="Hero Image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " width={600} height={600}  layout="responsive"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

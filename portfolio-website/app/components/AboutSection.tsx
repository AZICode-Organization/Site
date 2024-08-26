import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-black bg-neutral-200 py-2">

      <div className="md:grid md:grid-cols-12 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-20 xl:px-16">

        {/* Coluna 1 - Título */}
        <div className="col-span-12 md:col-span-3 mb-10 md:mb-0 self-start pl-6 md:pl-0 mt-10 md:mt-0">
          <div>
            <h2 className="text-xl font-light">
              Sobre nós
            </h2>
            <h1 className="text-3xl font-semibold">
              O que fazemos?
            </h1>
          </div>
        </div>

        {/* Coluna 2 - Texto Principal */}
        <div className="col-span-12 md:col-span-7 mb-4 md:mb-0 pr-4 md:pr-0">

          <p className="text-2xl font-light">
            A AZI CODE revoluciona a gestão empresarial com <span className="font-semibold text-indigo-900">soluções tecnológicas inovadoras </span>
            e <span className="font-semibold text-indigo-900">desenvolvimento de software sob medida.</span>
          </p>
          <p className="mt-3 md:hidden mb-6 text-xl">
            Projetamos as soluções digitais que impulsionam o futuro da sua empresa.
          </p>

          {/* Botões */}
          <div className="mt-3 text-right md:text-left mb-9 md:mb-0">

            <button className="px-6 py-2 w-fit sm:w-fit rounded-full bg-transparent hover:bg-slate-200 text-black border border-gray-800 mt-3">
              Conheça a equipe
            </button>
          </div>

        </div>

        {/* Coluna 3 - Logo */}
        <div className="col-span-12 md:col-span-2 sm:flex justify-center md:justify-end hidden self-start ">
          {/* Logo */}
          <Image src="/images/logominiblack.svg" alt="Logo" width={70} height={70} />
        </div>




      </div>

    </section>
  )
}

export default AboutSection

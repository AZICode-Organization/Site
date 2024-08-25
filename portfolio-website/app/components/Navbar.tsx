import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-3 sm:px-16 sm:py-4">
        <a href="/" className="text-1xl text-black font-semibold">
        {/* Imagem do logo */}
          <Image src="/images/logominiblack.svg" alt="Logo"  width={50} height={50} />
        </a>
        <div className="menu"></div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer border border-t-gray-300 border-l-transparent border-r-transparent text-gray-500 px-4 md:px-16 ">
      <div className="container py-12 flex justify-between">
        <span>
          {/* Logo */}
          <Link href={"/"} className="text-1xl text-black font-semibold">
            <Image src="/images/logominiblack.svg" alt="Logo" width={50} height={50} className="cursor-pointer hover:transform hover:scale-105 transition-transform"/>
          </Link>
        </span>
        <p>
          © 2024 AZICODE. Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer

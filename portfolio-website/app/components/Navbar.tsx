import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'

const NavLinks = [
  {
    title: 'Sobre nós',
    href: '#sobre'
  },
  {
    title: 'Serviços',
    href: '#servicos'
  },
  {
    title: 'Portfólio',
    href: '#portfolio'
  },
  {
    title: 'Contato',
    href: '#contato'
  },
]

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-3 sm:px-16 sm:py-4">
        <Link href={"/"} className="text-1xl text-black font-semibold">
        {/* Imagem do logo */}
          <Image src="/images/logominiblack.svg" alt="Logo"  width={50} height={50} />
        </Link>
        <div className="menu block md:w-auto" id="navbar">
          <ul>
            {
              NavLinks.map((link, index) => (
                <li key={index} className="inline-block px-3 py-3">
                  <NavLink href={link.href} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

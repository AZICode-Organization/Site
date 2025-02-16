"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import MenuOverlay from './MenuOverlay';

const NavLinks = [
  {
    title: 'Sobre nós',
    href: '#sobre'
  },
//  {
//    title: 'Serviços',
//    href: '#servicos'
//  },
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-40 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-3 sm:px-16 sm:py-2">

        {/* Logo */}
        <Link href={"/"} className="text-1xl text-black font-semibold">
          <Image src="/images/logominiblack.svg" alt="Logo" width={50} height={50} className="cursor-pointer hover:transform hover:scale-105 transition-transform"/>
        </Link>

        {/* Botão de menu */}
        <div className="mobile-menu block md:hidden">
          {
            !isOpen ? (
              <button onClick={() => setIsOpen(true)} className="flex items-center px-3 py-2 text-gray-700 hover:text-black hover:border-black">
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ) : (
              <button onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2 text-gray-700 hover:text-black hover:border-black">
                <XMarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>


        <div className="menu hidden md:block md:w-auto" id="navbar">
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
      {isOpen? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  )
}

export default Navbar

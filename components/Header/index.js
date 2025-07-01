"use client"

import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
    <>
    <header className='flex justify-between items-center bg-white text-gray-600 p-4'>
      <div className='w-full max-w-[1400px] mx-auto flex justify-between items-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/logo-canal-congreso.png' alt='Canal del Congreso' className='w-38 -ml-4 md:ml-0 md:w-45'
        />
        <nav className='hidden md:flex gap-4'>
          <ul className='flex font-[600] text-[.9rem]'>
            <li>
              <Link href='/' className='px-2 py-1 hover:text-[#3b0764]'>
                INICIO
              </Link>
            </li>
            <li>
              <Link
                href='/programacion'
                className='px-2 py-1 hover:text-[#3b0764]'
              >
                PROGRAMACIÓN
              </Link>
            </li>
            <li>
              <Link href='/noticias' className='px-2 py-1 hover:text-[#3b0764]'>
                NOTICIAS
              </Link>
            </li>
            <li>
              <Link
                href='/transparencia'
                className='px-2 py-1 hover:text-[#3b0764]'
              >
                TRANSPARENCIA
              </Link>
            </li>
            <li>
              <Link href='/contacto' className='px-2 py-1 hover:text-[#3b0764]'>
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleMenu} className='md:hidden p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer'>
          <MenuIcon />
        </button>
      </div>
    </header>
    {menuOpen && (
        <div className='md:hidden fixed top-0 left-0 right-0 z-50 bg-white text-gray-600 p-4 mt-16'>
          <ul className='flex flex-col font-[600] text-xl gap-8'>
            <li onClick={toggleMenu}>
              <Link href='/' className='px-2 py-1 hover:text-[#3b0764]'>
                INICIO
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/programacion'
                className='px-2 py-1 hover:text-[#3b0764]'
              >
                PROGRAMACIÓN
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href='/noticias' className='px-2 py-1 hover:text-[#3b0764]'>
                NOTICIAS
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                href='/transparencia'
                className='px-2 py-1 hover:text-[#3b0764]'
              >
                TRANSPARENCIA
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href='/contacto' className='px-2 py-1 hover:text-[#3b0764]'>
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

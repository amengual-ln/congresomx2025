import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex justify-between items-center bg-white text-gray-600 p-4'>
      <div className='w-full max-w-[1400px] mx-auto flex justify-between items-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/logo-canal-congreso.png' alt='Canal del Congreso' className='w-45'
        />
        <nav>
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
      </div>
    </header>
  )
}

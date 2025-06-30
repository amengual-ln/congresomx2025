import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex justify-between items-center bg-purple-900 text-white p-4'>
      <div className='w-full max-w-[1400px] mx-auto flex justify-between items-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/logo-canal-congreso.png' alt='Canal del Congreso' className='w-45'
        />
      </div>
    </header>
  )
}

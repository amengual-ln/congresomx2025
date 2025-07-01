import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='flex justify-between items-center bg-gray-600 text-white pt-4'>
      <div className='w-full flex flex-col justify-between items-center'>
        <div className='w-full max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 p-4'>
            <div>
                <h2 className='text-lg font-bold'>CONTÁCTENOS</h2>
                <form action="#" className='pt-2'>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="asunto">Asunto</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="email">Email</label>
                            <input type="email" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="empresa">Empresa</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="puesto">Puesto</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="ciudad">Ciudad</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="estado">Estado</label>
                            <input type="text" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="5" className='bg-gray-500 focus:bg-[#FAFAFA] focus:text-black rounded mb-2 -mt-1 outline-none p-2'></textarea>
                    </div>
                    <div className='flex flex-col md:flex-row justify-end mt-4'>
                        <button type="submit" className='bg-[#3b0764] text-white brightness-120 hover:brightness-100 opacity-75 hover:opacity-100 transition cursor-pointer px-4 py-2 rounded'>Enviar</button>
                    </div>
                </form>
            </div>
            <div className='grid place-content-center'>
                <h2 className='text-lg font-bold'>DIRECTORIO</h2>
                <h3 className='text-sm font-bold pt-2'>CANAL DEL CONGRESO</h3>
                <p className='text-sm text-gray-200 pb-2'>
                    Av. Congreso de la Unión 66,
                    El Parque, Venustiano Carranza<br />
                    15960 Ciudad de México, CDMX
                </p>
                <ul>
                    <li className='text-gray-200 opacity-75 hover:opacity-100 transition underline'>
                        <a href='https://www.canaldelcongreso.gob.mx/direccion-general' target='_blank' rel='noopener noreferrer'>Mando Superior</a>
                    </li>
                    <li className='text-gray-200 opacity-75 hover:opacity-100 transition underline'>
                        <a href='https://canaldelcongreso.gob.mx/pdfs/directorio' target='_blank' rel='noopener noreferrer'>Mandos Medios</a>
                    </li>
                </ul>
                <h3 className='text-sm font-bold pt-4'>SOLICITUD DE SERVICIOS</h3>
                <ul>
                    <li className='text-gray-200 opacity-75 hover:opacity-100 transition underline'>
                        <a href='https://www.canaldelcongreso.gob.mx/files/tucanal/imagen/transparencia/documentos/pdfnormativacanal/guiadelusuario_210715.pdf' target='_blank' rel='noopener noreferrer'>Guía de usuario</a>
                    </li>
                    <li className='text-gray-200 opacity-75 hover:opacity-100 transition underline'>
                        <a href='https://www.canaldelcongreso.gob.mx/files/imagenes/PortalTransparencia/Solicitud_Servicios_2025.docx' target='_blank' rel='noopener noreferrer'>Descarga formato</a>
                    </li>
                </ul>
                <h3 className='text-sm font-bold pt-4'>OBJETIVOS DE SERVICIO</h3>
                <p className='text-sm text-gray-200 py-1'>
                    Transparencia, información, servicio publico.
                </p>
                <div className='flex flex-col items-center justify-center gap-6 pt-8'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/logo-canal-congreso.png' alt='Canal del Congreso' className='w-45'
                    />
                    <div className='flex gap-2'>
                        <a href='https://www.facebook.com/canaldelcongreso' target='_blank' rel='noopener noreferrer' className='opacity-75 hover:opacity-100 transition cursor-pointer'>
                            <Facebook />
                        </a>
                        <a href='https://twitter.com/canaldelcongreso' target='_blank' rel='noopener noreferrer' className='opacity-75 hover:opacity-100 transition cursor-pointer'>
                            <Twitter />
                        </a>
                        <a href='https://www.instagram.com/canaldelcongreso' target='_blank' rel='noopener noreferrer' className='opacity-75 hover:opacity-100 transition cursor-pointer'>
                            <Instagram />
                        </a>
                        <a href='https://www.instagram.com/canaldelcongreso' target='_blank' rel='noopener noreferrer' className='opacity-75 hover:opacity-100 transition cursor-pointer'>
                            <Youtube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mx-auto mt-4 flex justify-center bg-gray-800 py-1'>
            <p className='text-xs text-gray-400'>
                © {new Date().getFullYear()} Canal del Congreso. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  )
}

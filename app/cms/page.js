import Link from "next/link"

export default function Cms() {
  return (
    <section className="text-gray-800 w-full max-w-[1400px] mx-auto p-8">
      <h1 className="text-3xl font-bold">Gestión de Contenido</h1>
      <div className="grid md:grid-cols-5 gap-8 my-8">
        <Link href="/cms/transmisiones" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">Transmisiones</Link>
        <Link href="/cms/noticias" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">Noticias</Link>
        <Link href="/cms/programas" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">Programas</Link>
        <Link href="/cms/organos" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">Organos</Link>
        <Link href="/cms/radio" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">Radio</Link>
      </div>
    </section>
  )
}
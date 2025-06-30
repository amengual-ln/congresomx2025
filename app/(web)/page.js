import { Livestreams } from '@/components/web/Livestreams'
import { Noticias } from '@/components/web/Noticias'
import { Accesos } from '@/components/web/Accesos'
import { Programas } from '@/components/web/Programas'
import { Organos } from '@/components/web/Organos'

export default async function Home() {
  return (
    <div>
      <Livestreams />

      <Accesos />

      <Programas />

      <Noticias />

      <Organos />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/descargar-app.png" alt="Descarga la app en play store o app store" />
    </div>
  )
}

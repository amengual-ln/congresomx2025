import { Header } from "@/components/cms/Header"

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

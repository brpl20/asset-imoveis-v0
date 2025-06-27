import type React from "react"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Configuração da fonte Archivo
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Asset Inteligência Imobiliária",
  description: "Soluções imobiliárias inteligentes para você",
    generator: 'v0.dev'
  ,
  icons: {
    icon: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

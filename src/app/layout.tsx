import localFont from "next/font/local"
import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Colle's Cleaning",
}

const nunito = localFont({
  src: "./fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
})

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="fr" className="h-full">
      <body className={`${nunito.variable} antialiased h-full flex justify-center items-center flex-col dot-background`}>
        {children}
      </body>
    </html>
  )
}

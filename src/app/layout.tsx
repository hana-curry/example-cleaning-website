import localFont from "next/font/local"
import Header from "./widgets/header"
import Footer from "./widgets/footer"
import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Colle's Cleaning",
    template: "Colle's Cleaning | %s"
  },
  icons: [
    {
      media: "(prefers-color-scheme: dark)",
      url: "/images/light.png",
      href: "/images/light.png"
    }, {
      media: "(prefers-color-scheme: light)",
      url: "/images/dark.png",
      href: "/images/dark.png"
    }
  ],
  openGraph: {
    type: "website",
    url: "https://example.colle.dev",
    title: "Colle's Cleaning Services",
    siteName: "Colle's Cleaning Services",
    description: "Chez Colle's Cleaning Services, nous proposons des services de nettoyage de haute qualité, adaptés aux besoins de chaque client. Grâce à notre équipe souriante et professionnelle.",
    locale: "fr_BE",
  },
  authors: [{name: "Colle", url: "https://colle.dev"}],
  keywords: ["nettoyage", "service", "surface"],
}

const nunito = localFont({
  src: "./fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
})

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="fr" className="h-full overflow-x-hidden">
      <body className={`${nunito.variable} antialiased h-full flex justify-center bg-background`}>
        <div className="w-full flex flex-col justify-between items-center">
          <div aria-hidden={true} className="pt-[40px]"></div>
          <Header />
          <main className=" max-w-[1080px] w-full">
          {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

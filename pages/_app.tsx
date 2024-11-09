import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      
      <div className={`min-h-screen flex flex-col ${inter.variable} font-sans`}>
        {/* Header/Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Container - if you're using react-hot-toast */}
        {/* <Toaster position="bottom-right" /> */}
      </div>
    </>
  )
}
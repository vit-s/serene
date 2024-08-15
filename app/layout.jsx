// local components
import Header         from "/components/Header.jsx"
import CursorProvider from "/components/CursorContext.jsx"
import Transition     from "/components/Transition.jsx"
import PageTransition from "/components/PageTransition.jsx"
// global components
import {
  Marcellus,
  Montserrat,
}                     from "next/font/google"
// styles
import "./globals.css"
// font Marcellus
const marcellus = Marcellus({
  subsets:  ["latin"],
  weight:   ['400'],
  variable: '--font-marcellus',
})
// font Montserrat
const montserrat = Montserrat({
  subsets:  ["latin"],
  weight:   ['100', '200', '300', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-screen`}
    >
    <body className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}>
    <CursorProvider>
      <Transition/>
      <Header/>
      <PageTransition>
        {children}
      </PageTransition>
    </CursorProvider>
    </body>
    </html>
  )
}

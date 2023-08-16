import{ Navbar, Footer} from '@/components'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Crappo',
  description: 'Your best online medical services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-gray">
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

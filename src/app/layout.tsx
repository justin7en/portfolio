import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/themeProvider"
import { NavMenu } from '@/components/navigationmenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev.Justin',
  description: 'Dev.Justin portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="h-screen flex flex-col">
            <div className="h-fit">
              <NavMenu />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

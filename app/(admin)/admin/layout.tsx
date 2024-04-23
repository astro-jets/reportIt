import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/app/context/AuthProvider'
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Report It',
  description: 'Home Page',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <main className="h-full w-full">
            <Navbar />
            <div className="min-h-screen w-full overflow-hidden flex flex-row justify-between">
              <Sidebar />
              {children}
            </div>
          </main>
        </body>
      </AuthProvider>
    </html>
  )
}

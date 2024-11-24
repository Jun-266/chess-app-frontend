//import type { Metadata } from "next"
//import { Inter } from "next/font/google"
//import "./globals.css"
//import { AuthProvider } from '@/contexts/AuthContext'
//import Link from 'next/link'

//const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chess ADOS",
  description: "A chess app for the ADOS community",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <nav className="border-b border-gray-700 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 sticky top-0 z-10">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                  Chess ADOS
                </Link>
                <div className="space-x-4">
                  <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                    Home
                  </Link>
                  <Link href="/profile" className="text-white hover:text-blue-300 transition-colors">
                    Profile
                  </Link>
                </div>
              </div>
            </nav>
            <main className="container mx-auto py-8 px-4">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}


import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from 'providers'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MentHer',
  description: 'A Female Empowered Virtual Mentorship Platform',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}

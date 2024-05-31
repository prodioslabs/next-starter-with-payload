import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Provider from './_components/provider'
import AppShell from './_components/app-shell'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Starter Kit',
  description: 'Fullstack Next Starter Kit with Payload and Tailwind CSS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistMono.variable} ${GeistSans.variable}`}>
      <body suppressHydrationWarning>
        <Provider>
          <AppShell>{children}</AppShell>
        </Provider>
      </body>
    </html>
  )
}

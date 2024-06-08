import { Inter as FontSans } from 'next/font/google'
import { cn } from '@kiwi/ui/utils'
import { ThemeProvider } from '@kiwi/ui/theme-provider'
import { Toaster } from '@kiwi/ui/toaster'
import { TailwindIndicator } from '@kiwi/ui/tailwind-indicator'
import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'ERP',
    template: '%s | ERP',
  },
  description: 'A Modern ERP system',
  keywords: ['Next.js', 'React', 'Tailwind CSS'],
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}

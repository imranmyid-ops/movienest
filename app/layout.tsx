import './(site)/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MovieNest',
  description: 'A Netflix-style preview for MovieNest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text">{children}</body>
    </html>
  )
}

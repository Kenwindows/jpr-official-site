import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "greek-ext", "vietnamese"] })

export const metadata: Metadata = {
  title: "JPプロダクトリテイリング - 無料で世界へ",
  description:
    "あなたの商品を、リスクゼロで海外展開。中小企業・個人事業主様の海外進出を、完全無料でサポートいたします。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

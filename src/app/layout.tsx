import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <nav className="m-6 navbar navbar-expand-lg navbar-dark bg-dark space-x-5 text-center text-slate-500    ">
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/my-to-do-list">Todo</Link>
                </nav>
                <main className="m-6 p-6 border border-slate-700">
                    {children}
                </main>
            </body>
        </html>
    )
}

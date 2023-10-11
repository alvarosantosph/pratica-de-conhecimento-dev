import "./globals.css"
import "@mantine/core/styles.css"
import { Inter } from "next/font/google"
import { MantineProvider } from "@mantine/core"
import { MensagemProvider } from "@/data/contexts/MensagemContext"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "App Limpa",
    description: "Aplicação com Arquitetura Limpa",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MantineProvider defaultColorScheme="dark">
                    <MensagemProvider>{children}</MensagemProvider>
                </MantineProvider>
            </body>
        </html>
    )
}

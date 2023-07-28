import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "normalize.css"
import TheHeader from "@/components/header/TheHeader";
import TheFooter from "@/components/footer/TheFooter";
import {Container} from "@mui/material";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'VideoSync',
    description: 'Synchronize what you see',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Container maxWidth={'xl'}>
            <TheHeader/>
            {children}
            <TheFooter/>
        </Container>
        </body>
        </html>
    )
}

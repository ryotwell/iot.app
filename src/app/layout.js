import '@/app/global.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/theme-provider.js'
import { Toaster } from '@/components/ui/sonner'
import { register } from 'swiper/element/bundle'

register()
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
    title: 'Sistem Monitoring Suhu Kelembapan dan Gas untuk Optimasi',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#a855f7" />
                
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                >
                    <Toaster richrichColors expand={false} />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout

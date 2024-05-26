import '@/app/global.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/theme-provider'
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
    title: 'Laravel',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                {/* {children} */}
            </body>
        </html>
    )
}

export default RootLayout

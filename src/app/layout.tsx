import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{Toaster} from "react-hot-toast"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ganesan | Portfolio',
  description: 'My portfolio website',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
            <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  )
}

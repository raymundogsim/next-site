import {inter} from '@/app/fonts'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Maritext SMS App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
} 
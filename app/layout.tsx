import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Brijesh |  Portfolio',
  description: 'A modern portfolio website showcasing my skills and projects',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Brijesh_picture.png', type: 'image/png' }
    ],
    apple: { url: '/Brijesh_picture.png', type: 'image/png' }
  },
  openGraph: {
    title: 'Brijesh | Portfolio',
    description: 'A modern portfolio website showcasing my skills and projects',
    images: [
      {
        url: '/Brijesh_picture.png',
        width: 1200,
        height: 630,
        alt: 'Brijesh'
      }
    ],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brijesh | Portfolio',
    description: 'A modern portfolio website showcasing my skills and projects',
    images: ['/Brijesh_picture.png'],
    creator: '@brijesh'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Brijesh_picture.png" />
        <link rel="apple-touch-icon" href="/Brijesh_picture.png" />
      </head>
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 
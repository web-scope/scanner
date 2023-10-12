import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';

const roboto = Roboto({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Scanner App',
  description: 'Aplicatie de scanare a codurilor QR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-[100dvh] flex flex-col" lang="en">
      <body className={`${roboto.className} flex flex-col grow`}>
        <Header></Header>
        <main className="flex flex-col flex-1">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

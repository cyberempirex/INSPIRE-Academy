import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader, Space_Grotesk } from 'next/font/google';
import MobileQuickDock from '@/components/navigation/MobileQuickDock';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import './globals.css';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serifFont = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const monoFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Inspire Academy — Senior Secondary (Class XI & XII) | Simla, Baksa, Assam',
  description: 'Established in 2019 in Simla, Baksa, Assam. Dedicated senior-secondary education for Arts and Science streams with disciplined scholarship, structured board preparation, and close faculty mentorship.',
  openGraph: {
    title: 'Inspire Academy — Simla, Baksa, Assam',
    description: 'Senior-secondary academy for Class XI & XII Arts and Science in Assam.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable}`}>
      <body className="bg-[#FAF8F5] text-[#0A192F] antialiased selection:bg-[#0275D8] selection:text-white font-sans pb-16 md:pb-0" suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <MobileQuickDock />
        </LanguageProvider>
      </body>
    </html>
  );
}

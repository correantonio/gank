import { Geist, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400'], // Libre Baskerville suporta 400, 400i e 700
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-baskerville',
});

export const metadata = {
  title: 'Agência Gank: Escale seu E-commerce com Previsibilidade',
  description:
    'Escale seu e-commerce com previsibilidade. A Agência Gank foca em lucro e dados reais, com +200 lojas atendidas. Solicite uma análise da operação.',
  
  icons: {
    icon: [
      { url: './favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    android: [
      {
        url: './android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        url: './android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://agenciagank.com.br/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Agência Gank: Escale seu E-commerce com Previsibilidade',
    description:
      'Escale seu e-commerce com previsibilidade. A Agência Gank foca em lucro e dados reais, com +200 lojas atendidas. Solicite uma análise da operação.',
    url: 'https://agenciagank.com.br/',
    type: 'website',
    images: [
      {
        url: '[INSERT IDEAL IMAGE URL HERE - ex: foto da equipe da agência ou dashboard de resultados]',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agência Gank: Escale seu E-commerce com Previsibilidade',
    description:
      'Escale seu e-commerce com previsibilidade. A Agência Gank foca em lucro e dados reais, com +200 lojas atendidas. Solicite uma análise da operação.',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${libreBaskerville.variable} h-full antialiased bg-gank-900`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

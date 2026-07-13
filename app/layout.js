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
  title: "Agência Gank: Escale seu E-commerce com Previsibilidade",
  description: "Escale seu e-commerce com previsibilidade. A Agência Gank foca em lucro e dados reais, com +200 lojas atendidas. Solicite uma análise da operação.",
  alternates: {
    canonical: "https://agenciagank.com.br/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Agência Gank: Escale seu E-commerce com Previsibilidade",
    description: "Escale seu e-commerce com previsibilidade. A Agência Gank foca em lucro e dados reais, com +200 lojas atendidas. Solicite uma análise da operação.",
    url: "https://agenciagank.com.br/",
    siteName: "Agência Gank",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "../public/SEO-equipe-gank.avif", // O caminho da imagem deve ficar na pasta public
        width: 1200,
        height: 630,
        alt: "Resultados de performance e escala de e-commerce da Agência Gank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência Gank: Escale seu E-commerce com Previsibilidade",
    description: "Escale seu e-commerce com previsibilidade. A Agência Gank foca em lucro e dados reais, com +200 lojas atendidas. Solicite uma análise da operação.",
    images: ["../public/SEO-equipe-gank.avif"],
  },
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

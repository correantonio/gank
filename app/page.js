import Script from 'next/script';
import Hero from '@/components/layout/Hero';
import Diagnostics from '@/components/layout/Diagnostics';
import Solution from '@/components/layout/Solution';
import Example from '@/components/layout/Example';
import Differential from '@/components/layout/Differential';
import Public from '@/components/layout/Public';
import Ending from '@/components/layout/Ending';
import Group from '@/components/layout/Group';
import ClientExample from '@/components/layout/ClientExample';

export default function Home() {
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://agenciagank.com.br/#organization",
        "name": "AGENCIA GANK MARKETING E PERFORMANCE DIGITAL LTDA",
        "taxID": "47.138.969/0001-97",
        "url": "https://agenciagank.com.br/",
        "telephone": "+5511976277922",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Angelo Santoni, 385 - Centro",
          "addressLocality": "Bom Jesus dos Perdões",
          "addressRegion": "SP",
          "postalCode": "12955-000",
          "addressCountry": "BR"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://agenciagank.com.br/",
        "url": "https://agenciagank.com.br/",
        "about": { "@id": "https://agenciagank.com.br/" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://agenciagank.com.br/#s-solution",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como a Agência Gank estrutura a operação de um e-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Gank realiza um diagnóstico completo, organiza a base de produtos e margens, estrutura a aquisição focada em conversão e faz a otimização contínua das campanhas baseada em dados reais e precisos."
            }
          },
          {
            "@type": "Question",
            "name": "Para qual perfil de empresa o projeto da Gank é indicado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O projeto é voltado para e-commerces que já vendem online, já investem em tráfego e desejam escalar o negócio com previsibilidade. Não é indicado para empresas sem operação validada ou que buscam soluções milagrosas."
            }
          },
          {
            "@type": "Question",
            "name": "Qual é o diferencial da Agência Gank no marketing de performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O principal diferencial da Gank é o foco em lucro e estratégia baseada em margem de dados reais, e não em cliques. Além disso, o cliente fala diretamente com quem executa o projeto, sem métodos genéricos."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
    <Script
        id="schema-gank"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main className="text-gank-p w-screen max-w-[100vw] overflow-x-hidden">
      <Hero />
      <Diagnostics />
      <Solution />
      <Group/>
      <Example />
      <ClientExample/>
      <Differential />
      <Public/>
      <Ending />
    </main>
    </>
  );
}

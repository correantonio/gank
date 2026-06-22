import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const solutionList = [
  {
    title: 'Diagnóstico completo',
    p: 'Analisamos seus números, produtos, funil e gargalos reais',
  },
  {
    title: 'Organização da base',
    p: 'Margem, precificação, produtos certos para escalar',
  },
  {
    title: 'Estrutura de aquisição',
    p: 'Campanhas e criativos com foco em conversão',
  },
  {
    title: 'Otimização e escala',
    p: 'Ajustes contínuos com base em dados reais',
  },
];

const Solution = () => {
  return (
    <article className="bg-gank-950 w-dvw flex flex-col items-center gap-20">
        <div className="container max-w-7xl mx-auto px-4 py-20 lg:py-40 flex flex-col lg:flex-row gap-10 lg:justify-between">
        <div data-layer="Cabeçalho de seção" className="lg:max-w-7/12">
          <SectionHeader icon="hammer">
            Como a Gank estrutura
            <span className="text-emphasys"> sua operação</span>
          </SectionHeader>
        </div>

        <section className="w-full lg:max-w-5/12">
          <ul className="flex flex-col gap-10">
            {solutionList.map((item, i) => (
              <li
                key={i}
                // Classes cruciais para o sticky:
                className="sticky top-10 z-10 bg-gank-950 py-2 flex gap-4 lg:items-center lg:flex-row flex-col border-b border-gank-p/25 pb-5"
              >
                <span className="text-gank-p/25 font-bold text-3xl lg:text-5xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-gank-050 text-2xl mb-1">{item.title}</h3>
                  <p className="text-lg">{item.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        </div>
    </article>
  );
};

export default Solution;

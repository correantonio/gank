import React from 'react';
import ListItem from '../ui/ListItem';
import SectionHeader from '../ui/SectionHeader';
import ListContainer from '../ui/ListContainer';
import Divider from '../ui/Divider';
import MagicCard from '../ui/MagicCard';

const Diagnostics = () => {
  const list = {
    error: [
      'Investe mais e o lucro não acompanha',
      'ROAS instável (um dia bom, outro ruim)',
      'Não sabe se pode investir com segurança',
      'Crescimento sem previsibilidade',
      'Sensação de que está “no escuro”',
    ],
    success: [
      'controle de margem',
      'clareza de produto lucrativo',
      'estrutura de funil',
      'dados organizados',
    ],
  };

  return (
    <article className="container max-w-7xl mx-auto px-4 flex flex-col gap-20">
      <section className="items-center justify-center flex flex-col lg:flex-row gap-10">
        <div data-layer="Cabeçalho de seção" className="lg:max-w-7/12">
          <SectionHeader icon="cart">
            Seu <span className="text-emphasys">e-commerce</span> está assim?
          </SectionHeader>
        </div>
        <div className="w-full lg:max-w-5/12">
          <MagicCard className="p-10">
            {list.error.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  text={item}
                  status="error"
                  border="fullBorder"
                />
              );
            })}
          </MagicCard>
          <p className="block w-fit bg-linear-to-r from-gank-900/25 via-gank-600__main to-gank-600__main/0 px-4 py-2 mt-5 text-center mx-auto">
            Isso não é problema de tráfego. É problema de estrutura.
          </p>
        </div>
      </section>

      <section className="items-center justify-center flex flex-col lg:flex-row gap-10">
        <div
          data-layer="Cabeçalho de seção"
          className="lg:max-w-7/12 lg:order-2"
        >
          <SectionHeader icon="globe">
            Mais trafego <span className="text-emphasys">não resolve</span> isso
          </SectionHeader>
        </div>

        <div className="w-full lg:max-w-5/12 lg:order-1 grid gap-5">
          <p className="text-lg">Se você não tem:</p>
          <MagicCard className="p-10">
            {list.success.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  text={item}
                  status="success"
                  border="fullBorder"
                />
              );
            })}       
          </MagicCard>
          <span className="inline-block w-fit bg-linear-to-r from-gank-900/25 via-gank-600__main to-gank-600__main/0 px-4 py-2 text-center mx-auto">
            Escalar só aumenta o risco.
          </span>
        </div>
      </section>
      <Divider />
    </article>
  );
};

export default Diagnostics;

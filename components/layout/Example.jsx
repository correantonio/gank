import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ListItem from '../ui/ListItem';
import Image from 'next/image';

import FirstImage from '../../assets/04-example/example-image-one.png';
import SecondImage from '../../assets/04-example/example-image-two.png';

const list = {
  error: [
    'Sem clareza de margem',
    'Produtos desorganizados',
    'Tráfego sem direção',
  ],
  success: [
    'Ajuste de produtos e precificação',
    'Organização da operação',
    'Otimização das campanhas',
  ],
};
const Example = () => {
  return (
    <article className="container max-w-7xl mx-auto px-4 py-20 lg:py-40">
      <div className="lg:max-w-6/12 mx-auto text-center mb-10">
        <SectionHeader icon="hammer">
          Veja um <span className="text-emphasys">exemplo real</span> do nosso
          trabalho
        </SectionHeader>
      </div>
      <section className="flex w-full gap-40 lg:gap-0 flex-col lg:flex-row justify-around">
        <div className="lg:max-w-6/12 relative flex justify-center">
          <Image
            src={FirstImage}
            alt="Exemplo"
            width={400}
            height={510}
            oading="eager"
          />
          <ul className="bg-gank-800 rounded-lg max-w-[290px] p-4 flex flex-col gap-4 z-10 absolute -bottom-40 shadow-2xl shadow-gank-600__main/20">
            {list.error.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  text={item}
                  status="error"
                  border="minBorderB"
                />
              );
            })}
            {/* <div
              className="absolute lg:top-8 lg:-left-4 size-8 bg-gank-800 -z-10 rotate-45 rounded-sm pointer-events-none"
              aria-hidden="true"
            /> */}
          </ul>
        </div>
        <div className="lg:max-w-6/12 relative flex justify-center">
          <Image
            src={SecondImage}
            alt="Exemplo"
            width={400}
            height={510}
            loading="eager"
          />
          <ul className="bg-gank-800 rounded-lg max-w-[290px] p-4 flex flex-col gap-4 z-10 absolute -bottom-40 shadow-2xl shadow-gank-600__main/20">
            {list.success.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  text={item}
                  status="success"
                  border="minBorderB"
                />
              );
            })}
            {/* <div
              className="absolute lg:top-8 lg:-right-4 size-8 bg-gank-800 -z-10 rotate-45 rounded-sm pointer-events-none"
              aria-hidden="true"
            /> */}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Example;

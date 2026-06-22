import React from 'react';
import Divider from '../ui/Divider';
import SectionHeader from '../ui/SectionHeader';
import MagicCard from '../ui/MagicCard';
import AnimatedNotificationList from '../ui/Animated/AnimatedNotificationList';
import AnimatedBase from '../ui/Animated/AnimatedBase';
import AnimatedPaper from '../ui/Animated/AnimatedPaper';
import AnimatedOrbit from '../ui/Animated/AnimatedOrbit';

const Differential = () => {
  return (
    <div className='bg-gank-950 w-full'>
      <Divider />
      <article className="container max-w-7xl mx-auto px-4 py-20 lg:py-40">
        <div className="lg:max-w-6/12 mx-auto text-center mb-10">
          <SectionHeader icon="hammer">
            Por que a Gank é <span className="text-emphasys">diferente</span>
          </SectionHeader>
        </div>
        <section className="max-w-7xl grid gap-5 lg:grid-rows-2 lg:max-h-fit lg:gap-10 lg:grid-cols-12">
          <MagicCard className="lg:col-span-4 lg:row-span-2">
            <div className="p-2">
              <AnimatedNotificationList />
            </div>
            <div className="p-5 lg:p-10">
              <h3 className="text-3xl leading-relaxed text-gank-100">
                Não focamos em clique, focamos em lucro
              </h3>
            </div>
          </MagicCard>
          <MagicCard className="lg:col-span-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <AnimatedBase className="lg:order-2" />
              <div className="p-5 lg:p-10">
                <h3 className="text-3xl leading-relaxed text-gank-100">
                  Estratégia baseada em resultados
                </h3>
              </div>
            </div>
          </MagicCard>
          <MagicCard className="lg:col-span-4 flex items-center group overflow-hidden min-h-50">
            <div className="p-5 lg:p-10 flex relative items-center">
              <h3 className="text-3xl leading-relaxed text-gank-100 w-8/12">
                Você fala com quem executa
              </h3>
              <AnimatedPaper className="w-4/12 absolute right-0 -z-10 opacity-50 group-hover:transition-opacity group-hover:opacity-100" />
            </div>
          </MagicCard>
          <MagicCard className="lg:col-span-4 flex items-center group overflow-hidden min-h-50">
            <div className="p-5 lg:p-10 flex  relative items-center">
              <h3 className="text-3xl leading-relaxed text-gank-100 w-8/12 ">
                Estratégias únicas
              </h3>
              <AnimatedOrbit className="w-4/12 absolute right-0 -z-10 opacity-50 group-hover:transition-opacity group-hover:opacity-100" />
            </div>
          </MagicCard>
        </section>
      </article>
      <Divider />
    </div>
  );
};

export default Differential;

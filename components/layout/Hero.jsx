"use client"

import React from 'react';
import Image from 'next/image';
import ganklogo from '../../assets/0-hero/logogank3d.png';
import Button from '../ui/Button';
import Circles from '../ui/Circles';
import TypographyH1 from '../ui/Text/TypographyH1';

const Hero = () => {
  return (
    <header className="hero">
      <div className="container mx-auto p-4 grid gap-8 justify-items-center text-center relative">
        <div className="w-fit -mb-10 lg:-mb-20">
          <Image src={ganklogo} alt="Logo Gank" className="size-auto"/>
        </div>

        <div>
          <TypographyH1> <span className="text-emphasys">Escale</span> seu ecommerce com previsibilidade e <span className="text-emphasys">lucro</span></TypographyH1>
          <p className="text-gank-grayish-100 text-lg max-w-2xl mx-auto mt-2">
            Se você já investe em tráfego, mas não tem clareza de quanto volta,
            quanto pode investir e quando escalar, sua operação está travando
            seu crescimento
          </p>
        </div>
        <ul className="flex gap-4">
          <li className="text-gank-grayish-100 p-2">
            <span className="text-2xl lg:text-3xl leading-10 text-white">12M</span>
            <p className="text-sm lg:text-base">Gerados em vendas</p>
          </li>
          <li className="text-gank-grayish-100 p-2">
            <span className="text-2xl lg:text-3xl leading-10 text-white">8.4x</span>
            <p className="text-sm lg:text-base">ROAS médio</p>
          </li>
          <li className="text-gank-grayish-100 p-2">
            <span className="text-2xl lg:text-3xl leading-10 text-white">+200</span>
            <p className="text-sm lg:text-base">e-commerces</p>
          </li>
        </ul>
        <Button>Entrar em contato</Button>
      </div>
      <Circles />
    </header>
  );
};

export default Hero;

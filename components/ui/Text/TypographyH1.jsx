import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

export default function TypographyH1({ children, className }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // O escopo garante que ele pegue apenas as .blur-word dentro deste h1 específico,
    // não importando o quão profundas elas estejam aninhadas nas tags do children.
    const words = gsap.utils.toArray('.blur-word', containerRef.current);
    
    if (words.length === 0) return;

    gsap.fromTo(
      words,
      { opacity: 0, filter: 'blur(12px)', y: 10 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 2, ease: 'power3.out', stagger: 0.08 }
    );
  }, { scope: containerRef });

  // MOTOR DE PARSE: Varre a árvore do React buscando os textos
  const parseChildren = (nodes) => {
    return React.Children.map(nodes, (child) => {
      // 1. Se for texto puro, dividimos em palavras mantendo os espaços intactos
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child).split(/(\s+)/).map((part, index) => {
          if (!part.trim()) return part; // Mantém o espaço (whitespace) como texto normal
          return (
            <span
              key={`word-${index}`}
              className="blur-word will-change-[filter,opacity,transform] title-h1"
            >
              {part}
            </span>
          );
        });
      }
      
      // 2. Se for um elemento React (ex: <span className="text-red">), clonamos a tag
      // e aplicamos o motor recursivamente no que tem dentro dela.
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          children: parseChildren(child.props.children),
        });
      }
      
      return child;
    });
  };

  if (!children) {
    console.warn("[TypographyH1] A prop 'children' está ausente.");
    return null;
  }

  return (
    <h1
      ref={containerRef}
      // Removi o flexbox daqui para que o texto flua naturalmente, 
      // respeitando as quebras de linha e o espaçamento nativo do navegador.
      className={cn("text-gank-100 leading-relaxed flex lg:gap-4 gap-2  flex-wrap justify-center align-middle items-baseline", className)}
    >
      {parseChildren(children)}
    </h1>
  );
}
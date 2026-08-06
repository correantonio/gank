import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const Button = ({
  children,
  className,
  href = "https://api.whatsapp.com/send/?phone=5511976277922&text=Olá, vim através da sua landing page e gostaria de solicitar um serviço",
  variant = 'default', // 'default' | 'inline'
  ...props
}) => {
  const isDefault = variant === 'default';

  // Classes compartilhadas por ambas as variantes
  const baseClasses = "transition-colors duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gank-600__main focus-visible:ring-offset-2";

  // Classes específicas do botão com background e glows
  const defaultClasses = "relative inline-block px-6 py-3 text-gank-050 text-lg bg-linear-90 from-gank-400/75 via-gank-600__main to-gank-700/25 hover:bg-gank-500";

  // Classes específicas do estilo link textual
  const inlineClasses = "inline-flex items-center text-gank-p hover:text-white underline underline-offset-4 hover:underline text-lg";

  return (
    <Link 
      href={href} 
      rel="noopener noreferrer" 
      target="_blank"
      className={cn(baseClasses, isDefault ? defaultClasses : inlineClasses, className)}
      {...props}
    >
      {isDefault ? (
        <>
          <span className="relative z-10">{children}</span>
          {/* Elementos decorativos exclusivos do botão principal */}
          <span className='absolute top-1/2 left-1/2 -translate-1/2 size-[calc(100%-4px)] -z-[2] border border-gank-050/50 pointer-events-none'/>
          <span className='absolute top-1/2 left-1/2 -translate-1/2 size-[calc(100%+10px)] -z-[3] bg-gank-600__main blur-3xl pointer-events-none'/>
          <span className='absolute top-1/2 left-1/2 -translate-1/2 size-[calc(100%+10px)] -z-[4] bg-gank-600__main/25 pointer-events-none'/>
        </>
      ) : (
        /* Renderização limpa para a variante inline */
        <span className="relative z-10 flex gap-1 items-center">{children} <ArrowUpRight size={18} className=""/> </span>
      )}
    </Link>
  );
};

export default Button;
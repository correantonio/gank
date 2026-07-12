import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Button = ({children, className, href}) => {
  href = "https://api.whatsapp.com/send/?phone=5511976277922&text=Olá, vim através da sua landing page e gostaria de solicitar um serviço"
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <span className={cn('bg-linear-90 from-gank-400/75 via-gank-600__main to-gank-700/25 inline-block px-6 py-3 text-gank-050 text-lg hover:bg-gank-500 transition-colors duration-300 cursor-pointer relative', className)}>
      {children}
        <span className='absolute top-1/2 left-1/2 -translate-1/2 size-[calc(100%-4px)] -z-[2] border border-gank-050/50'/>
        <span className='absolute top-1/2 left-1/2 -translate-1/2 size-[calc(100%+10px)] -z-[3] bg-gank-600__main blur-3xl'/>
        <span className='absolute top-1/2 left-1/2 -translate-1/2 size-[calc(100%+10px)] -z-[4] bg-gank-600__main/25'/>
      </span>
    </Link>
  )
}

export default Button
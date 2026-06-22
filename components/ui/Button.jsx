import { ArrowUp, ArrowUpRight } from 'lucide-react'
import React from 'react'

const Button = ({children}) => {
  return (
    <a href="#" className="flex gap-2 items-center justify-center pl-6 pr-2 py-2 bg-gank-600__main hover:bg-gank-500 text-white rounded-full font-medium transition-colors ">
      {children}
      <span className="bg-gank-050 rounded-full p-2 inline-block"><ArrowUpRight className="text-gank-600__main" /></span>
    </a>
  )
}

export default Button

import Link from 'next/link'
import React from 'react'

export type buttonProps = {
  href: string;
  name: string;
}

export default function button({href, name}:buttonProps) {
  return (
    <Link href={href}>
        <a className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
            {name}
        </a>
    </Link>
   
    
  )
}

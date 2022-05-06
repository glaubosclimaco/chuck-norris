import Link from 'next/link'
import React from 'react'

export type buttonProps = {
  href: string
  name: string
  dataCy: string // for testing with cypress
}

export default function button({ href, name, dataCy }: buttonProps) {
  return (
    <Link href={href}>
      <a
        data-cy={dataCy}
        className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
      >
        {name}
      </a>
    </Link>
  )
}

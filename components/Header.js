import Image from 'next/image'
import React from 'react'

export function Header() {
  return (
    <div>
      <h1>Header Component</h1>

      <div>
        <Image layout='fill' src='https://links.papareact.com/ocw' />
      </div>
    </div>
  )
}

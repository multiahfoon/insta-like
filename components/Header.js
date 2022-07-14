import Image from 'next/image'
import React from 'react'

export function Header() {
  return (
    <div className='flex justify-between max-w-6xl'>
      {/* left */}

      <div className='relative hidden lg:inline-grid h-24 w-24'>
        <Image
          layout='fill'
          objectFit='contain'
          src='https://links.papareact.com/ocw'
        />
      </div>

      <div className='relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer'>
        <Image
          layout='fill'
          objectFit='contain'
          src='https://links.papareact.com/jjm'
        />
      </div>

      {/* mid */}

      {/* right */}
    </div>
  )
}

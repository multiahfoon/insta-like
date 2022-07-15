import { faker } from '@faker-js/faker'
import { useMemo } from 'react'

export function MiniProfile() {
  const imgUrl = useMemo(() => {
    return faker.image.avatar()
  }, [])

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        alt='mini profile photo'
        className='w-16 h-15 rounded-full border p-[2px]'
        src={imgUrl}
      />
      <div>
        <h2>username</h2>
        <h3>Welcome to Instagram</h3>
      </div>

      <button>Sign Out</button>
    </div>
  )
}

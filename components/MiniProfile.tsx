import { faker } from '@faker-js/faker'
import { useMemo } from 'react'

export function MiniProfile() {
  const currentUser = useMemo(() => {
    return { username: faker.internet.userName(), img: faker.image.avatar() }
  }, [])

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        alt='mini profile photo'
        className='w-16 h-15 rounded-full border p-[2px]'
        src={currentUser.img}
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{currentUser.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

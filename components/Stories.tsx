import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { Suggestion } from '../types'
import { Story } from './Story'

export const Stories = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>()

  useEffect(() => {
    if (!suggestions) {
      setSuggestions(
        [...Array(20)].map((_, index) => ({
          address: faker.address.street(),
          avatar: faker.image.avatar(),
          birthdate: faker.date.birthdate().toString(),
          email: faker.internet.email(),
          id: index.toString(),
          name: faker.name.firstName(),
          password: faker.internet.password(),
          username: faker.internet.userName(),
        }))
      )
    }
  }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-20 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {suggestions?.map((profile) => (
        <Story
          key={profile.id}
          imgUrl={profile.avatar}
          username={profile.name}
        />
      ))}
    </div>
  )
}

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
    <div>
      {suggestions?.map((profile) => (
        <Story
          key={profile.id}
          imgUrl={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

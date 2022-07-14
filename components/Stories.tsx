import { faker } from '@faker-js/faker'
import { NextComponentType } from 'next'
import { useEffect, useState } from 'react'

interface Suggestion {
  address: string
  avatar: string
  birthdate: string
  email: string
  name: string
  password: string
  userId: string
  username: string
}

export const Stories: NextComponentType = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>()

  useEffect(() => {
    setSuggestions(
      [...Array(20)].map(() => ({
        address: faker.address.street(),
        avatar: faker.image.avatar(),
        birthdate: faker.date.birthdate().toString(),
        email: faker.internet.email(),
        name: faker.name.firstName(),
        password: faker.internet.password(),
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
      }))
    )
  }, [])

  return <div></div>
}

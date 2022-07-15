import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { Suggestion } from '../types'

export function Suggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>()

  useEffect(() => {
    if (!suggestions) {
      setSuggestions(
        [...Array(20)].map((_, index) => ({
          address: faker.address.street(),
          avatar: faker.image.avatar(),
          birthdate: faker.date.birthdate().toString(),
          email: faker.internet.email(),
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          password: faker.internet.password(),
          username: faker.internet.userName(),
        }))
      )
    }
  }, [])

  return <div></div>
}

import { faker } from '@faker-js/faker'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Suggestion } from '../types'
import { transformSession } from '../util/transformSession'
import { Story } from './Story'

export const Stories = () => {
	const { data } = useSession()
	const [suggestions, setSuggestions] = useState<Suggestion[] | null>()

	const session = transformSession(data)

	useEffect(() => {
		if (!suggestions) {
			setSuggestions(
				[...Array(20)].map(() => ({
					address: faker.address.street(),
					avatar: faker.image.avatar(),
					birthdate: faker.date.birthdate().toString(),
					company: faker.company.companyName(),
					email: faker.internet.email(),
					id: faker.datatype.uuid(),
					name: faker.name.firstName(),
					password: faker.internet.password(),
					username: faker.internet.userName(),
				}))
			)
		}
	}, [])

	return (
		<div className='flex space-x-2 p-6 bg-white mt-8 border-gray-20 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
			{session?.user && (
				<Story
					key={session.user}
					imgUrl={session.user.image}
					username={session.user.username}
				/>
			)}
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

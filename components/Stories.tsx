import { useSession } from 'next-auth/react'
import { useRecoilValue } from 'recoil'
import { suggestionsState } from '../atoms/suggestionsAtom'
import { Suggestion } from '../types'
import { transformSession } from '../util/transformSession'
import { Story } from './Story'

export const Stories = () => {
	const { data } = useSession()

	const suggestions = useRecoilValue<Suggestion[] | null>(suggestionsState)

	const session = transformSession(data)

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

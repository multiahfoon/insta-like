import { signOut, useSession } from 'next-auth/react'
import { transformSession } from '../util/transformSession'

export function MiniProfile() {
	const { data } = useSession()
	const session = transformSession(data)

	return (
		<div className='flex items-center justify-between mt-14 ml-10'>
			<img
				alt='mini profile photo'
				className='w-16 h-15 rounded-full border p-[2px]'
				src={session?.user?.image}
			/>
			<div className='flex-1 mx-4'>
				<h2 className='font-bold'>{session?.user?.username}</h2>
				<h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
			</div>

			<button
				className='text-blue-400 text-sm font-semibold'
				onClick={() => signOut()}
			>
				Sign Out
			</button>
		</div>
	)
}

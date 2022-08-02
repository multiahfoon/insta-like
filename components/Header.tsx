import {
	HeartIcon,
	MenuIcon,
	PaperAirplaneIcon,
	PlusCircleIcon,
	SearchIcon,
	CameraIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { faker } from '@faker-js/faker'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import { modalState } from '../atoms/modalAtom'
import { transformSession } from '../util/transformSession'

export function Header() {
	const { data } = useSession()
	const [_, setIsOpen] = useRecoilState(modalState)
	const router = useRouter()

	const session = transformSession(data)

	const imgUrl = useMemo(() => {
		return faker.image.avatar()
	}, [])

	return (
		<div className='shadow-sm border-b bg-white sticky top-0 z-50'>
			<div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
				<div
					className='relative hidden lg:inline-grid w-24 flex items-center justify-center'
					onClick={() => router.push('/')}
				>
					<h1 className='text-2xl font-signature font-medium items-center'>
						instaLike
					</h1>
				</div>

				<div
					className='relative lg:hidden w-10 flex items-center flex-shrink-0 cursor-pointer'
					onClick={() => router.push('/')}
				>
					<CameraIcon />
				</div>

				<div className='max-w-xs'>
					<div className='relative mt-1 p-3 rounded-md'>
						<div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
							<SearchIcon className='h-5 w-5 text-gray-500 ' />
						</div>

						<input
							className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
							placeholder='Search'
							type='text'
						/>
					</div>
				</div>

				<div className='flex items-center justify-end space-x-4'>
					<HomeIcon className='navBtn' onClick={() => router.push('/')} />
					<MenuIcon
						className='h-6 md:hidden cursor-pointer'
						onClick={() => router.push('/')}
					/>

					{session ? (
						<>
							<div className='relative navBtn'>
								<PaperAirplaneIcon className='navBtn rotate-45' />
								<div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
									3
								</div>
							</div>

							<PlusCircleIcon
								className='navBtn'
								onClick={() => setIsOpen(true)}
							/>
							<HeartIcon className='navBtn' />

							<img
								className='h-10 w-10 rounded-full cursor-pointer'
								alt='profile picture'
								src={session?.user?.image ? session.user?.image : imgUrl}
							/>
						</>
					) : (
						<button disabled>Sign in</button>
					)}
				</div>
			</div>
		</div>
	)
}

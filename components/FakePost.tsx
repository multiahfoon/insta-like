import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useState } from 'react'
import Moment from 'react-moment'
import { Post } from '../types'

export function FakePost({ id, username, userImg, img, caption }: Post) {
	const [comment, setComment] = useState<string>('')
	const [comments, setComments] = useState<any>()
	const [likes, setLikes] = useState<any>()
	const [hasLiked, setHasLiked] = useState<any>(false)

	return (
		<div className='bg-white my-7 border rounded-sm'>
			<div className='flex items-center p-5'>
				<img
					src={userImg}
					className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
					alt=''
				/>
				<p className='flex-1 font-bold'>{username}</p>
				<DotsHorizontalIcon className='h-5' />
			</div>

			<img className='object-cover w-full' src={img} alt='' />
			<div className='flex justify-between px-4 pt-4'>
				<div className='flex space-x-4  '>
					{hasLiked ? (
						<HeartIconFilled className='btn text-red-500' />
					) : (
						<HeartIcon className='btn' />
					)}
					<ChatIcon className='btn' />
					<PaperAirplaneIcon className='btn' />
				</div>
				<BookmarkIcon className='btn' />
			</div>

			<p className='p-5 truncate'>
				{likes?.length > 0 && (
					<p className='font-bold mb-1'>{likes.length} likes</p>
				)}
				<span className='font-bold mr-1'>{username} </span>
				{caption}
			</p>

			{comments?.length > 0 && (
				<div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
					{comments.map((comment: any) => (
						<div key={comment.id} className='flex items-center space-x-2 mb-3'>
							<img className='h-7 rounded-full' alt='' />
							<p className='text-sm flex-1'>
								<span className='font-bold'></span>{' '}
							</p>
							<Moment fromNow className='pr-5 text-xs'></Moment>
						</div>
					))}
				</div>
			)}

			<form className='flex items-center p-4'>
				<EmojiHappyIcon className='h-7 cursor-pointer' />
				<input
					className='border-none flex-1 focus:ring-0 outline-none'
					type='text'
					placeholder='Add a comment...'
					onChange={(e) => setComment(e.target.value)}
				/>
				<button
					disabled={true}
					type='submit'
					className='font-semibold text-blue-400'
				>
					Post
				</button>
			</form>
		</div>
	)
}

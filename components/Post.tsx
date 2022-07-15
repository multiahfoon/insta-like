import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

export function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* header */}
      <div className='flex items-center p-5'>
        <img
          alt='post profile photo'
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
          src={userImg}
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      <img alt='post image' className='object-cover w-full' src={img} />

      <div className='flex justify-between pb-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          {/* <HeartIconFilled className='btn' /> */}
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
    </div>
  )
}

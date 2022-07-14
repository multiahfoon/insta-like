import { NextComponentType } from 'next'
import Image from 'next/image'
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export const Header: NextComponentType = () => {
  return (
    <div>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* left */}
        <div className='relative hidden lg:inline-grid w-24'>
          <Image
            layout='fill'
            objectFit='contain'
            src='https://links.papareact.com/ocw'
          />
        </div>

        <div className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
          <Image
            layout='fill'
            objectFit='contain'
            src='https://links.papareact.com/jjm'
          />
        </div>

        <div className='max-w-xs'>
          {/* mid - search bar*/}
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

        {/* right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
              3
            </div>
          </div>

          <PlusCircleIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img
            className='h-10 w-10 rounded-full cursor-pointer'
            alt='profile picture'
            src='https://links.papareact.com/ocw'
          />
        </div>
      </div>
    </div>
  )
}

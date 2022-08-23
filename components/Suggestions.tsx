import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { Suggestion } from '../types'

export function Suggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>()

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className=' text-sm font-bold text-gray-400'>
          Suggestions for you
        </h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>

      {/* @TODO: convert following section to component */}
      {suggestions?.map((profile, index) => (
        <div key={index} className='flex items-center justify-between mt-3'>
          <img
            className='w-10 h-10 rounded-full border p-[2px]'
            src={profile.avatar}
            alt='suggested profile photo'
          />

          <div className='flex-1 ml-4'>
            <h2>{profile.username}</h2>
            <h3 className='text-xs text-gray-400'>
              Works at {profile.company}
            </h3>
          </div>
          <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  )
}

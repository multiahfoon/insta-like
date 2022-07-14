import { NextComponentType } from 'next'
import { Stories } from './Stories'

export const Feed: NextComponentType = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto'>
      <section className='col-span-2'>
        <Stories />
        {/* post */}
      </section>

      <section>
        {/* mini profile */}
        {/* suggestions */}
      </section>
    </div>
  )
}

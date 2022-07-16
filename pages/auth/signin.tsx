import { getProviders, signIn as signInWithProvider } from 'next-auth/react'
import { Header } from '../../components/Header'
import { Providers } from '../../types'

export default function SignIn({ providers }: Providers) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 p-56 px-14 text-center'>
        <img className='w-80' src='https://links.papareact.com/ocw' />

        <p className='text-xs italic'>
          This is not a REAL app, this is built for educational purposes
        </p>

        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-blue-500 rounded-lg text-white'
                onClick={() => signInWithProvider(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

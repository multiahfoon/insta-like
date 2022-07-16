import { getProviders, signIn as signInWithProvider } from 'next-auth/react'
import { Providers } from '../../types'

export default function SignIn({ providers }: Providers) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signInWithProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

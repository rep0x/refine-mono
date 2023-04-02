import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import { type NextPage } from 'next'
import Head from 'next/head'

import { api } from '~/utils/api'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const user = useUser()

  return (
    <>
      <Head>
        <title>Refine Blog</title>
        <meta name="description" content="Refine Studio - Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {!user.isSignedIn && <SignInButton />}
        {user.isSignedIn && <SignOutButton />}
      </main>
    </>
  )
}

export default Home

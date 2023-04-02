import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import { type NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'ui'

import { api } from '~/utils/api'

const Home: NextPage = () => {
  const user = useUser()

  const { data } = api.posts.getAll.useQuery()

  console.log(data)

  return (
    <>
      <Head>
        <title>Refine Blog</title>
        <meta name="description" content="Refine Studio - Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button>Test</Button>
        {user.isSignedIn && <h1>{user.user.firstName}</h1>}
        {!user.isSignedIn && <SignInButton />}
        {user.isSignedIn && <SignOutButton />}
        <div>
          {data?.map(post => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home

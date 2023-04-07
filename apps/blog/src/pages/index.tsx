import { type NextPage } from 'next'
import Head from 'next/head'

import { Typography, Container, Section } from 'ui'

import { Base } from '~/layouts/Base'

import { api } from '~/utils/api'

const Home: NextPage = () => {
  const { data } = api.posts.getAll.useQuery()

  return (
    <>
      <Head>
        <title>Refine Blog</title>
        <meta name="description" content="Refine Studio - Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Base>
          <Section>
            <Container>
              <Typography variant="h1">Home</Typography>
              <div>
                {data?.map(post => (
                  <div key={post.id}>{post.content}</div>
                ))}
              </div>
            </Container>
          </Section>
        </Base>
      </main>
    </>
  )
}

export default Home

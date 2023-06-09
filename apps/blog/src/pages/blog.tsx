import { type NextPage } from 'next'
import Head from 'next/head'

import { Typography, Container, Section } from 'ui'
import { Crystal } from '~/components/Crystal'

import { Base } from '~/layouts/Base'

const Home: NextPage = () => {
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
              <Typography variant="h1" gutterBottom>
                Blog
              </Typography>
              <Typography color="text.secondary">Work in Progress</Typography>
              <Crystal />
            </Container>
          </Section>
        </Base>
      </main>
    </>
  )
}

export default Home

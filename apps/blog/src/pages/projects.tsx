import { type NextPage } from 'next'
import Head from 'next/head'

import { Typography, Container, Section } from 'ui'

import Base from '~/layouts/Base'

const Projects: NextPage = () => {
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
                Projects
              </Typography>
              <Typography color="text.secondary">Work in Progress</Typography>
            </Container>
          </Section>
        </Base>
      </main>
    </>
  )
}

export default Projects

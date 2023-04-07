import { type NextPage } from 'next'
import Head from 'next/head'

import { Typography, Container, Section, SectionNav } from 'ui'

import { Base } from '~/layouts/Base'

const SECTIONS = [
  { label: 'Design', href: '#Design' },
  { label: 'Development', href: '#Development' },
  { label: 'Consulting', href: '#Consulting' },
]

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refine Blog</title>
        <meta name="description" content="Refine Studio - Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Base>
          <SectionNav sections={SECTIONS} />
          {SECTIONS.map(section => (
            <Section
              key={section.label}
              id={section.label}
              sx={{ minHeight: '100vh' }}
            >
              <Container>
                <Typography variant="h1" gutterBottom>
                  {section.label}
                </Typography>
                <Typography color="text.secondary">
                  # Work in Progress
                </Typography>
              </Container>
            </Section>
          ))}
        </Base>
      </main>
    </>
  )
}

export default Services

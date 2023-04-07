import React from 'react'

import { Box, GlobalStyles } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Typography } from '../../components'
import { transitions } from '../../variables'

export interface ISection {
  label: string
  href: string
}

export interface ISectionNav {
  sections: ISection[]
}

export const SectionNav = (props: ISectionNav) => {
  const { sections } = props

  const { asPath } = useRouter()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

  return (
    <Box sx={styles}>
      <GlobalStyles
        styles={{
          html: {
            '& .section': {
              scrollMargin: 100,
              height: '100%',
            },
          },
        }}
      />

      {sections.map(section => {
        const active = asPath.includes(section.href)

        return (
          <Box
            key={section.label}
            className={`indicator ${active ? 'active' : ''}`}
          >
            <Link href={section.href} onClick={handleScroll}>
              <Box className="dot" />
              <Box className="label">
                <Typography>{section.label}</Typography>
              </Box>
            </Link>
          </Box>
        )
      })}
    </Box>
  )
}
const styles = {
  position: 'fixed',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  bgcolor: 'background.paper',
  p: 1,
  borderRadius: 4,
  boxShadow: 1,

  '& .indicator': {
    position: 'relative',
    bgcolor: 'text.primary',
    height: 12,
    width: 12,
    borderRadius: 4,

    '& a': {
      height: 12,
      width: 12,
    },

    '& .dot': {
      height: 12,
      width: 12,
    },

    '& .label': {
      transition: transitions.cubicEaseInOut,
      opacity: 0,
      position: 'absolute',
      top: -12,
      right: 32,
      p: 1,
      borderRadius: 2,
      bgcolor: 'background.paper',
      color: 'text.primary',
      transform: 'translateY(-8px)',
    },

    '&.active': {
      bgcolor: 'red',
    },

    '&:hover': {
      '& .label': {
        display: 'block',
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  },
}

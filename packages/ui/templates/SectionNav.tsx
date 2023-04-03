import React from 'react'

import { Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface ISection {
  label: string
  href: string
}

export interface ISectionNav {
  sections: ISection[]
}

export const SectionNav = (props: ISectionNav) => {
  const { sections } = props

  const { pathname } = useRouter()

  return (
    <Box sx={styles}>
      {sections.map(section => {
        console.log('pathname', pathname)
        console.log('section.href', section.href)
        console.log(pathname === section.href)
        return (
          <Box
            key={section.label}
            className={`indicator ${pathname === section.href ? 'active' : ''}`}
          >
            <Link href={section.href}>
              <Box key={section.label} className="dot" />
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
  gap: 3,

  '& .indicator': {
    bgcolor: 'white',
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

    '&.active': {
      bgcolor: 'red',
    },
  },
}

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box, MenuItem as MUIMenuItem, MenuItemProps } from '@mui/material'

import { Typography } from '../components/Typography'

export interface TMenuItem extends MenuItemProps {
  label?: string
  icon?: React.ReactNode
  link?: string
}

export const MenuItem = (props: TMenuItem) => {
  const { label, icon, link, sx } = props

  const { pathname } = useRouter()

  let isCurrentRoute = false

  if (link) {
    isCurrentRoute = pathname.includes(link)
  }

  const content = (
    <>
      {icon && icon}
      {label && <Typography textAlign="center">{label}</Typography>}
    </>
  )

  return (
    <MUIMenuItem
      {...props}
      sx={{ ...styles, ...sx }}
      className={`menu-item ${isCurrentRoute ? 'active' : ''} ${
        icon ? 'has-icon' : ''
      }`}
    >
      {link && (
        <Link className="link" href={link}>
          {content}
        </Link>
      )}
      {!link && <Box className="link">{content}</Box>}
    </MUIMenuItem>
  )
}

const styles = {
  p: 0,
  bgcolor: 'background.default',
  borderRadius: 2,
  color: 'text.primary',

  '& .link': {
    width: 'inherit',
    display: 'flex',
    alignItems: 'center',
    py: 1,
    px: 2,
    gap: 1,
    textDecoration: 'none',
    color: 'inherit',

    '& *': {
      fontWeight: 'bold',
    },
  },

  '&.has-icon': {
    '& .link': {
      pl: 1,
    },
  },

  '&.active': {
    bgcolor: 'text.primary',
    color: 'background.paper',
  },
}

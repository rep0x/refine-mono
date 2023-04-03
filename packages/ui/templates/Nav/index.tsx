import * as React from 'react'

import { AppBar, Box, Toolbar, Container } from '@mui/material'

import { Logo, ToggleMode } from 'ui'

import MobileMenu from './MobileMenu'

interface Props {
  logo?: React.ReactNode
  mainMenu?: React.ReactNode[]
  quickMenu?: React.ReactNode[]
  user?: React.ReactNode
}

export const Nav = (props: Props) => {
  const { logo = <Logo />, mainMenu, quickMenu, user } = props

  return (
    <AppBar position="absolute" sx={styles}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box className="logo-desktop">{logo}</Box>

          <Box className="menu-mobile">
            {mainMenu && <MobileMenu menu={mainMenu} />}
            <Box sx={{ ml: 2, display: 'flex' }}>{logo}</Box>
          </Box>

          {mainMenu && (
            <Box className="menu-desktop">{mainMenu.map(item => item)}</Box>
          )}

          <Box className="right">
            {quickMenu && <ToggleMode />}
            {user && <Box sx={{ flexGrow: 0 }}>{user}</Box>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const styles = {
  height: 80,
  backgroundColor: 'background.paper',
  backgroundImage: 'none',
  boxShadow: 2,
  color: 'text.primary',

  '& .MuiContainer-root': {
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
    px: 3,
  },

  '& .MuiToolbar-root': {
    width: '100%',
    height: 60,
    minHeight: 'auto',
  },

  '& .logo-desktop': {
    display: {
      xs: 'none',
      md: 'flex',
    },
    mr: 2,
  },

  '& .menu-mobile': {
    flexGrow: 1,
    display: {
      xs: 'flex',
      md: 'none',
    },
    alignItems: 'center',
  },

  '& .menu-desktop': {
    flexGrow: 1,
    gap: 2,
    display: {
      xs: 'none',
      md: 'flex',
    },
  },

  '& .right': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 2,
  },
}

import React from 'react'

import { Box, IconButton } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { Menu } from '../../components'

interface Props {
  menu: React.ReactNode[]
}

const MobileMenu = (props: Props) => {
  const { menu } = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {menu.map((item, index) => (
          <Box key={index} onClick={handleClose}>
            {item}
          </Box>
        ))}
      </Menu>
    </Box>
  )
}

export default MobileMenu

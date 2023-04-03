import React from 'react'
import { Menu, Typography } from 'ui'
import { Box, IconButton, Avatar, Divider } from '@mui/material'

interface Props {
  menu?: React.ReactNode[]
  user?: {
    name: string
    avatar: string
  }
}

export const UserMenu = (props: Props) => {
  const { menu, user } = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      {user && (
        <IconButton onClick={handleOpen} sx={{ p: 0 }}>
          <Avatar alt={user.name} src={user.avatar} />
        </IconButton>
      )}
      {menu && (
        <Menu
          sx={styles}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box className="wrapper">
            <Box className="header">
              {user && (
                <>
                  <Avatar alt={user.name} src={user.avatar} />
                  <Typography fontWeight="bold" sx={{ mt: 1 }}>
                    {user.name}
                  </Typography>
                  <Divider sx={{ mt: 1, mb: 0 }} />
                </>
              )}
            </Box>
            {menu.map((item, index) => (
              <Box key={index} onClick={handleClose}>
                {item}
              </Box>
            ))}
          </Box>
        </Menu>
      )}
    </Box>
  )
}

const styles = {
  mt: '44px',

  '& .wrapper': {
    px: 0,

    '& .header': {
      p: 1,
    },
  },

  '& .MuiPopover-paper .MuiList-root': {
    width: 200,

    '& .menu-item': {
      bgcolor: 'transparent',

      '&:hover': {
        bgcolor: 'background.default',
      },
    },
  },
}

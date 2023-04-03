import React from 'react'
import { MenuProps, Menu as MUIMenu } from '@mui/material'

export const Menu = (props: MenuProps) => {
  return (
    <MUIMenu {...props} sx={{ ...styles, ...props.sx }}>
      {props.children}
    </MUIMenu>
  )
}

const styles = {
  '& .MuiPopover-paper': {
    bgcolor: 'background.paper',
    backgroundImage: 'none',
  },

  '& .MuiList-root': {
    p: 1,

    '& .menu-item': {
      bgcolor: 'transparent',
      width: '100%',

      '&:hover': {
        bgcolor: 'background.default',
      },

      '&.active': {
        bgcolor: 'text.primary',
        color: 'background.paper',
      },
    },
  },
}

import { ButtonProps, Button as MUIButton } from '@mui/material'
import React from 'react'

export const Button = (props: ButtonProps) => {
  return <MUIButton {...props}>{props.children}</MUIButton>
}

export default Button

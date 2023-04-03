import React from 'react'
import { ContainerProps, Container as MUIContainer } from '@mui/material'

export const Container = (props: ContainerProps) => {
  return <MUIContainer {...props}>{props.children}</MUIContainer>
}

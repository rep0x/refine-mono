import React from 'react'

import { TypographyProps, Typography as MUITypography } from '@mui/material'

export const Typography = (props: TypographyProps) => {
  return <MUITypography {...props}>{props.children}</MUITypography>
}

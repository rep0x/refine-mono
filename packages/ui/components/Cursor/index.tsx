import React from 'react'

import { Box, useTheme } from '@mui/material'

import pattern from './pattern.png'
import patternSvg from './pattern.svg'
import { Pattern } from './Pattern'
import { hexToRgb } from '../../utils/hexToRgb'

export const Cursor: React.FC = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const theme = useTheme()

  React.useEffect(() => {
    document.body.style.cursor = 'none'
  }, [])

  React.useEffect(() => {
    const setFromEvent = (e: any) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  const cursorPositionStyles = {
    left: position.x,
    top: position.y,
  }

  return (
    <>
      <Box sx={styles.fixedContainer}>
        <Box
          sx={{
            ...styles.pattern,
          }}
        >
          <Pattern />
        </Box>
        <Box
          className="shimmer"
          sx={{
            ...cursorPositionStyles,
            ...styles.shimmer,
            background: `radial-gradient(circle, rgba(${hexToRgb(
              theme.palette.primary.main,
            )},1) 0%, rgba(${hexToRgb(theme.palette.primary.main)},0) 80%)`,
          }}
        />
      </Box>
      <Box
        sx={{
          ...styles.fixedContainer,
          zIndex: 10000,
          pointerEvents: 'none',
        }}
      >
        <Box
          sx={{
            ...cursorPositionStyles,
            ...styles.cursor,
          }}
        >
          <Box sx={styles.cursorDot} />
        </Box>
      </Box>
    </>
  )
}

const styles = {
  fixedContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },

  shimmer: {
    width: 200,
    height: 200,
    opacity: 0.5,
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    pointerEvents: 'none',
    zIndex: 0,
  },

  pattern: {
    position: 'relative',
    zIndex: 1,
    height: '100vh',
    width: '100%',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'repeat',
    overflow: 'hidden',

    '& svg': {
      color: 'background.paper',
      fill: 'currentColor()',
      minHeight: '100vh',
    },
  },

  cursor: {
    position: 'absolute',
    width: 24,
    height: 24,
    boxSizing: 'border-box',
    bgcolor: 'rgba(0,0,0,.26)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: '50%',
    transform: 'translate(-50%,-50%)',
    pointerEvents: 'none',
    zIndex: 10000,
    padding: '24px',
  },

  cursorDot: {
    height: 2,
    width: 2,
    borderRadius: '50%',
    bgcolor: 'rgba(255,255,255,0.5)',
  },
}

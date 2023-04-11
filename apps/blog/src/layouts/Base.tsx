import React from 'react'
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

import { BaseLayout, Nav, UserMenu, MenuItem, Cursor } from 'ui'

import { MENU } from '~/menus'
import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

export const Base: React.FC<Props> = props => {
  const { children } = props

  const user = useUser()

  return (
    <BaseLayout>
      <Cursor />
      <Nav
        variant='hovering'
        mainMenu={MENU.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
        quickMenu={MENU.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
        user={
          user.isSignedIn ? (
            <UserMenu
              menu={[
                <SignOutButton key="sign-out">
                  <MenuItem label="Sign out" icon={<LogoutRoundedIcon />} />
                </SignOutButton>,
              ]}
              user={{
                name: String(user.user.fullName),
                avatar: user.user.profileImageUrl,
              }}
            />
          ) : (
            <SignInButton>
              <MenuItem label="Sign in" />
            </SignInButton>
          )
        }
      />
      <Box sx={styles}>{children}</Box>
    </BaseLayout>
  )
}

const styles = {
  position: 'relative',
  zIndex: 2,
}

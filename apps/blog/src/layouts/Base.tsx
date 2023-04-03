import React from 'react'
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'

import { BaseLayout, Nav, UserMenu, MenuItem } from 'ui'

import { MENU } from '~/menus'

interface Props {
  children: React.ReactNode
}

const Base: React.FC<Props> = props => {
  const { children } = props

  const user = useUser()

  return (
    <BaseLayout>
      <Nav
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
                  <MenuItem label="Sign out" />
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

      {children}
    </BaseLayout>
  )
}

export default Base

import { Link, Outlet } from 'react-router-dom'

import { Icon } from 'frox-design'
import { createGlobalStyle } from 'styled-components'

import * as Styled from './AuthLayout.styled'

const RegisterStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`

export const AuthLayout = () => {
  if (localStorage.getItem('token')) {
    localStorage.remove('token')
  }

  return (
    <>
      <Styled.AppSwitcher>
        <Link to="/">
          <Icon name="arrowLeft" />
          Back to App Switcher
        </Link>
      </Styled.AppSwitcher>
      <Styled.Wrapper>
        <Outlet />

        <RegisterStyles />
      </Styled.Wrapper>
      <Styled.ThemeSwitcherToggle />
    </>
  )
}

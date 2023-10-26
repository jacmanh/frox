import { Outlet } from 'react-router-dom'

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
      <Styled.Wrapper>
        <Outlet />

        <RegisterStyles />
      </Styled.Wrapper>
      <Styled.Switcher />
    </>
  )
}

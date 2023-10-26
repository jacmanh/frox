import { Outlet } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

import * as Styled from './AuthLayout.styled'

const RegisterStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`

export const AuthLayout = () => (
  <Styled.Wrapper>
    <Outlet />
    <RegisterStyles />
  </Styled.Wrapper>
)

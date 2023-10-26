import { Outlet } from 'react-router-dom'

import * as Styled from './MainLayout.styled'

export const MainLayout = () => {
  return (
    <Styled.Container>
      <Styled.TopBar />
      <Styled.Navbar>
        <Styled.Switcher />
      </Styled.Navbar>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </Styled.Container>
  )
}

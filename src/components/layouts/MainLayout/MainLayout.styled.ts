import { ThemeSwitcher } from '@components/molecules/ThemeSwitcher/ThemeSwitcher.tsx'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: minmax(15%, 250px) 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 'navbar topbar' 'navbar main';
  align-items: start;
`

export const TopBar = styled.div`
  grid-area: topbar;
  height: 100px;
  background-color: ${({ theme }) => theme.background.primary};
`

export const Navbar = styled.nav`
  grid-area: navbar;
  display: grid;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.background.secondary};
  border-top: 0;
  border-bottom: 0;
  padding: ${({ theme }) => theme.space.default};
`

export const Main = styled.main`
  grid-area: main;
  height: 100%;
  background-color: ${({ theme }) => theme.background.body};
  padding: ${({ theme }) => theme.space.default};
`

export const Switcher = styled(ThemeSwitcher)`
  justify-self: center;
  align-self: end;
`

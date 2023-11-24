import { ThemeSwitcher } from '@components/molecules/ThemeSwitcher/ThemeSwitcher.tsx'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 500px;
  text-align: center;
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  background-color: ${({ theme }) => theme.background.primary};
  margin: 10% auto;
  padding: ${({ theme }) => theme.space.lg};
`

export const ThemeSwitcherToggle = styled(ThemeSwitcher)`
  position: fixed;
  bottom: 5%;
  left: 5%;
  background-color: ${({ theme }) => theme.background.primary};
`

export const AppSwitcher = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.background.primary};
`

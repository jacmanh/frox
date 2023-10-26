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

export const Switcher = styled(ThemeSwitcher)`
  position: fixed;
  bottom: 5%;
  left: 5%;
  background-color: ${({ theme }) => theme.background.primary};
`

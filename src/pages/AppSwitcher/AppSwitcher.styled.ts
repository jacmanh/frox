import { ThemeSwitcher } from '@app/components/molecules/ThemeSwitcher/ThemeSwitcher'
import { Grid } from 'frox-design'
import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  max-width: 70%;
  border-radius: ${({ theme }) => theme.size.borderRadius.default};
  padding: ${({ theme }) => theme.space.lg};
  margin: ${({ theme }) => theme.space.lg} auto;
`

export const List = styled(Grid)`
  margin: ${({ theme }) => theme.space.lg} 0;

  > div {
    padding: 0;
  }

  > div:hover {
    border-color: ${({ theme }) => theme.color.interaction.border.primary.hover};
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.size.borderRadius.default};
  }
`

export const Switcher = styled(ThemeSwitcher)`
  position: fixed;
  bottom: 5%;
  left: 5%;
`

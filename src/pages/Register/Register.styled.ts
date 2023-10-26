import { Button as ButtonComponent } from 'frox-design'
import styled from 'styled-components'

export const Button = styled(ButtonComponent)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.default};
`

export const Information = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  text-align: left;
`

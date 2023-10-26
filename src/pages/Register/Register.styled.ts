import { Button as ButtonComponent } from 'frox-design'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 500px;
  text-align: center;
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  background-color: ${({ theme }) => theme.background.primary};
  margin: 10% auto;
  padding: ${({ theme }) => theme.space.lg};
`

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

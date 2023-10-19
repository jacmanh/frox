import { colors, Icon } from 'frox-design'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 5%;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  width: 200px;
  height: 50px;
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  background-color: ${({ theme }) => theme.background.primary};
`

export const Sun = styled(Icon)`
  color: ${colors.orange};
`

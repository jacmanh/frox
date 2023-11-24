import { colors, Icon } from 'frox-design'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
  width: 100%;
  max-width: 200px;
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  background-color: ${({ theme }) => theme.background.secondary};
`

export const Sun = styled(Icon)`
  color: ${colors.orange};
`

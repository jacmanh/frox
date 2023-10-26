import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 500px;
  text-align: center;
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  background-color: ${({ theme }) => theme.background.primary};
  margin: 10% auto;
  padding: ${({ theme }) => theme.space.lg};
`

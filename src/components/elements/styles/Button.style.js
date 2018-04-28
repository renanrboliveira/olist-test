import styled from 'styled-components'
/** @component */
export const ButtonStyle = styled.button`
  border: 0;
  background-color: ${props => props.theme.default};
  ${props => props.success && `background-color: ${props.theme.success}`};
  ${props => props.danger && `background-color: ${props.theme.danger}`};
  ${props => props.warning && `background-color: ${props.theme.warning}`};
  cursor: pointer;
  font-weight: 700;
  color: white;
  ${props => props.block && 'width: 100%'}
  height: 3.25rem;
  padding: 0 2rem;
`

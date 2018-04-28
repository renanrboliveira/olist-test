import styled from 'styled-components'
import { colorByProps } from './../../../utils/utils'

export const ButtonStyle = styled.button`
  border: 0;
  background-color: ${props => colorByProps(props)};
  cursor: pointer;
  font-weight: 700;
  color: white;
  ${props => props.block && 'width: 100%'}
  height: 3.25rem;
  padding: 0 2rem;
`

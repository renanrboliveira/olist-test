import styled from 'styled-components'
import { colorByProps } from './../../../utils/utils'

export const InputStyle = styled.input`
  border: 1px solid #B6B9D0;
  width: 100%;
  height: 2.75rem;
  box-shadow: inset 0 1px 3px #B6B9D0;
  padding: 0.875rem;
  &:focus {
    outline: 1px solid ${props => colorByProps(props)};
  }
  border-color: ${props => colorByProps(props)};
`

export const MessageStyle = styled.div`
  display: inline-block;
  font-size: .75rem;
  color: ${props => colorByProps(props)};
  transition: color .15s cubic-bezier(.215,.61,.355,1);
`

import styled from 'styled-components'
import { colorByProps } from './../../../utils/utils'

export const InputStyle = styled.input`
  border: .0625rem solid #B6B9D0;
  width: 100%;
  height: 2.75rem;
  box-shadow: inset 0 0.1875rem 0.1875rem rgba(0,0,0,0.05);
  padding: 0.875rem;
  color: #696D8C;
  font-size: .9rem;
  &:focus {
    outline: 1px solid ${props => colorByProps(props) === '#EAEAF4' ? '#0A1F9C' : colorByProps(props)};
  }
  border-color: ${props => colorByProps(props)};
`

export const MessageStyle = styled.div`
  display: inline-block;
  font-size: .75rem;
  color: ${props => colorByProps(props)};
  transition: color .15s cubic-bezier(.215,.61,.355,1);
`

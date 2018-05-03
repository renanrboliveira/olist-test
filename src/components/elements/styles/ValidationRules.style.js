import styled from 'styled-components'
import { colorByProps } from './../../../utils/utils'

export const ValidationRulesStyle = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const ValidationRuleStyle = styled.li`
  &::before {
    border-radius: 50%;
    margin-right: .5rem;
    content: '';
    display: inline-block;
    height: 0.625rem;
    width: 0.625rem;
    background-color: ${props => colorByProps(props)};
  }
`

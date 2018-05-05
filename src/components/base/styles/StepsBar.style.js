import styled from 'styled-components'
import { colorByProps } from './../../../utils/utils'

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const Step = styled.div`
  border-radius: .625rem;
  height: .5rem;
  width: 31%;
  background-color: ${props => colorByProps(props)};
`

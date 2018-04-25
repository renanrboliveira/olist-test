import styled from 'styled-components'

export default styled.input`
  border: 1px solid #B6B9D0;
  width: 100%;
  height: 2.75rem;
  box-shadow: inset 0 1px 3px #B6B9D0;
  padding: 0.875rem;
  &:focus {
    outline: 1px solid ${props => props.color};
  }
  border-color: ${props => props.color};
`

import styled, { css } from 'styled-components'

export const Form = styled.form`
  > input:last-child {
    margin-bottom: 2rem;
  }
`

export const HeaderForm = styled.div`
  width: 100%;
  text-align: center;
`

export const TitleForm = styled.h2`
  font-size: 1.375rem;
  color: #312F4F;
`

export const WrapperForm = styled.div`
  background-color: #FFF;
  border: 3px solid #F2F2F2;
  width: 100%;
  max-width: 32.19rem;
  padding: 3.75rem 4.375rem 3rem;
`

export const FieldForm = styled.div`
  margin-bottom: 1rem;
  position: relative;
  ${props => props.last && css`
    margin-bottom: 2rem;
  `}
`

import styled, { css } from 'styled-components'

export const wiggle = css`
  will-change: transform;
  animation-name: wiggle;
  animation-duration: 150ms;
  animation-iteration-count: 4;
  @keyframes wiggle {
    33% {
      transform: rotateZ(1deg);
    }
    to {
      transform: rotateZ(-1deg);
    }
  }
`

export const Form = styled.form`
  > input:last-child {
    margin-bottom: 2rem;
  }
  ${props => !props.isValid && wiggle}
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
  height: 95%;
  width: 100%;
  max-width: 32.19rem;
  padding: 3.75rem 4.375rem 3rem;
`

export const FieldForm = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  ${props => props.last && css`
    margin-bottom: 2rem;
  `}
`

export const MessageValidationForm = styled.div`
  display: inline-block;
  font-size: .75rem;
  color: #F79682;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
  transition: color .15s cubic-bezier(.215,.61,.355,1);
`

export const BarValidationForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const BarItemValidationForm = css`
  border-radius: .625rem;
  height: .5rem;
  width: 31%;
  background-color: #EAEAF4;
`
export const BarItemOneValidationForm = styled.div`
  ${BarItemValidationForm}
  background-color: ${props => props.color};
`
export const BarItemTwoValidationForm = styled.div`
  ${BarItemValidationForm}
  background-color: ${props => props.color};

`
export const BarItemThreeValidationForm = styled.div`
  ${BarItemValidationForm}
  background-color: ${props => props.color};
`

export const ListValidation = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const ItemValidation = css`
  &::before {
    background-color: #EAEAF4;
    border-radius: 50%;
    margin-right: .5rem;
    content: '';
    display: inline-block;
    height: 0.625rem;
    width: 0.625rem;
    ${props => props.error !== undefined && !props.error && css`
      background-color: #F79682;
    `}
    ${props => props.error !== undefined && props.error && css`
      background-color: #1FE6A8;
    `}
    background-color: ${props => props.isEmpty && '#EAEAF4'};
  }
`

export const ItemValidationOneNumber = styled.li`
  ${ItemValidation}
`
export const ItemValidationOneLetter = styled.li`
  ${ItemValidation}
`
export const ItemValidationSixLetter = styled.li`
  ${ItemValidation}
`

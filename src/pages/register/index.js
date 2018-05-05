import React from 'react'
import { withFormik } from 'formik'

import Logotype from './../../assets/logotype.svg'
import { form } from './../../utils/locales'
import {
  isLetterUppercase,
  isEmail,
  isNumber,
  isSixCharacteres
} from './../../utils/utils'

import RegisterForm from './RegisterForm'

import {
  WrapperForm,
  HeaderForm,
  TitleForm
} from './styles/RegisterForm.style'
import { Container } from './styles/RegisterPage.style'

const HomePage = (props) => (
  <Container>
    <WrapperForm>
      <HeaderForm>
        <img src={Logotype} />
        <TitleForm>{form.title}</TitleForm>
      </HeaderForm>
      <RegisterFormik />
    </WrapperForm>
  </Container>
)

const RegisterFormik = withFormik({
  mapPropsToValues: props => ({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }),
  validate: (values, props) => {
    const errors = { validationRules: [] }

    if (isNumber(values.password)) {
      errors.validationRules.push(form.atLeastOneNumber)
    }

    if (isLetterUppercase(values.password)) {
      errors.validationRules.push(form.atLeastOneLetter)
    }

    if (isSixCharacteres(values.password)) {
      errors.validationRules.push(form.atLeastSixCharacteres)
    }

    if (!values.fullName) {
      errors.fullName = {
        color: 'danger',
        message: form.fieldRequired
      }
    }

    if (!values.password) {
      errors.password = null
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = {
        color: 'danger',
        message: form.fieldRequired
      }
    } else if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = {
        color: 'danger',
        message: form.passwordDontMatch
      }
    }

    if (!values.email) {
      errors.email = {
        color: 'danger',
        message: form.fieldRequired
      }
    } else if (!isEmail(values.email)) {
      errors.email = {
        color: 'danger',
        message: form.invalidEmail
      }
    }
    return errors
  },
  handleSubmit: () => {}
})(RegisterForm)

export default HomePage

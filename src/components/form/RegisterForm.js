import React from 'react'
import { withFormik } from 'formik'
import { isEmpty } from 'lodash'

import Logotype from './../../assets/logotype.svg'

import { form } from './../../utils/locales'
import { colorByErrorValue, colorByErrorValuePassword } from './../../utils/utils'
import Button from './../elements/Button'
import Input from './../elements/Input'
import Label from './../elements/Label'
import StepsBar from './../elements/StepsBar'

import {
  Form,
  WrapperForm,
  FieldForm,
  HeaderForm,
  ListValidation,
  ItemValidationOneLetter,
  ItemValidationOneNumber,
  ItemValidationSixLetter
} from './styles/RegisterForm.style'

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  const {
    passwordOneNumber,
    passwordOneLetter,
    passwordAtLeastSixCharacteres
  } = errors

  return (
    <Form onSubmit={handleSubmit}>
      <FieldForm>
        <Label name='fullName'>{form.fullname}</Label>
        <Input
          name='fullName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          color={colorByErrorValue(errors.fullName, values.fullName)}
          help={errors.fullName}
        />
      </FieldForm>
      <FieldForm>
        <Label name='email'>{form.email}</Label>
        <Input
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          color={colorByErrorValue(errors.email, values.email)}
          help={errors.email}
        />
      </FieldForm>
      <FieldForm style={{marginBottom: '.5rem'}}>
        <Label name='password'>{form.password}</Label>
        <Input
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          color={colorByErrorValuePassword(errors.password, values.password, errors.currentStepBar)}
          value={values.password}
          help={errors.password}
        />
      </FieldForm>
      <StepsBar
        current={errors.currentStepBar}
        size={3}
      />
      <ListValidation>
        <ItemValidationSixLetter
          isEmpty={isEmpty(values.password)}
          error={passwordAtLeastSixCharacteres}>
          {form.atLeastSixCharacteres}
        </ItemValidationSixLetter>
        <ItemValidationOneNumber
          isEmpty={isEmpty(values.password)}
          error={passwordOneNumber}>
          {form.atLeastOneNumber}
        </ItemValidationOneNumber>
        <ItemValidationOneLetter
          isEmpty={isEmpty(values.password)}
          error={passwordOneLetter}>
          {form.atLeastOneLetter}
        </ItemValidationOneLetter>
      </ListValidation>
      <FieldForm last>
        <Label name='passwordConfirm'>{form.passwordConfirm}</Label>
        <Input
          type='password'
          name='passwordConfirm'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
          color={colorByErrorValue(errors.passwordConfirm, values.passwordConfirm)}
          help={errors.passwordConfirm}
        />
      </FieldForm>
      <Button block color='success' type='submit' disabled={isSubmitting}>
        {form.labelButtonRegister}
      </Button>
    </Form>
  )
}

const MyForm = withFormik({

  mapPropsToValues: props => ({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    passwordOneNumber: false,
    passwordOneLetter: false,
    passwordAtLeastSixCaracteres: false
  }),

  validate: (values, props) => {
    const errors = { currentStepBar: 0 }

    // refactor
    errors.passwordOneNumber = /[0-9]/.test(values.password)
    errors.passwordOneLetter = /[A-Z]/.test(values.password)
    errors.passwordAtLeastSixCharacteres = /.{6,}/.test(values.password)

    if (/[0-9]/.test(values.password)) {
      errors.currentStepBar = errors.currentStepBar + 1
    }

    if (/[A-Z]/.test(values.password)) {
      errors.currentStepBar = errors.currentStepBar + 1
    }

    if (/.{6,}/.test(values.password)) {
      errors.currentStepBar = errors.currentStepBar + 1
    }

    if (!values.fullName) {
      errors.fullName = [{
        color: 'danger',
        message: form.fieldRequired
      }]
    }
    if (!values.password) {
      errors.password = []
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = [{
        color: 'danger',
        message: form.fieldRequired
      }]
    }
    if (!values.email) {
      errors.email = [{
        color: 'danger',
        message: form.fieldRequired
      }]
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = [{
        color: 'danger',
        message: form.invalidEmail
      }]
    }
    return errors
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors,
      resetForm
    }
  ) => {
    setTimeout(() => {
      resetForm({})
      setSubmitting(false)
    }, 1000)
  }
})(InnerForm)

const RegisterForm = () => (
  <WrapperForm>
    <HeaderForm>
      <img src={Logotype} />
      <h3>{form.title}</h3>
    </HeaderForm>
    <MyForm />
  </WrapperForm>
)

export default RegisterForm

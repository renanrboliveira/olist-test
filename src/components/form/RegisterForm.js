import React from 'react'
import { withFormik } from 'formik'

import Logotype from './../../assets/logotype.svg'

import { form } from './../../utils/locales'
import Button from './../elements/Button'
import Input from './../elements/Input'
import Label from './../elements/Label'
import StepsBar from './../elements/StepsBar'
import ValidationRules from './../elements/ValidationRules'
import {
  colorByErrorValue,
  colorByErrorValuePassword,
  isNumber,
  isLetterUppercase,
  isSixCharacteres,
  isEmail
} from './../../utils/utils'

import {
  Form,
  WrapperForm,
  FieldForm,
  HeaderForm
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
  const errorValidationRules = errors.validationRules && errors.validationRules.length
  return (
    <Form onSubmit={handleSubmit}>
      <FieldForm>
        <Label name='fullName'>{form.fullname}</Label>
        <Input
          name='fullName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          color={(touched.fullName || values.fullName !== '') ? colorByErrorValue(errors.fullName, values.fullName) : ''}
          help={(touched.fullName || values.fullName !== '') ? errors.fullName : []}
        />
      </FieldForm>
      <FieldForm>
        <Label name='email'>{form.email}</Label>
        <Input
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          color={(touched.email || values.email !== '') ? colorByErrorValue(errors.email, values.email) : ''}
          help={(touched.email || values.email !== '') ? errors.email : []}
        />
      </FieldForm>
      <FieldForm style={{marginBottom: '.5rem'}}>
        <Label name='password'>{form.password}</Label>
        <Input
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          color={(touched.password || values.password !== '') ? colorByErrorValuePassword(errors.password, values.password, errorValidationRules) : ''}
          help={(touched.password || values.password !== '') ? errors.password : []}
        />
      </FieldForm>
      <StepsBar
        current={errorValidationRules}
      />
      <ValidationRules rules={[
        form.atLeastSixCharacteres,
        form.atLeastOneLetter,
        form.atLeastOneNumber
      ]} currentRules={errors.validationRules} />
      <FieldForm last>
        <Label name='passwordConfirm'>{form.passwordConfirm}</Label>
        <Input
          type='password'
          name='passwordConfirm'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
          color={(touched.passwordConfirm || values.passwordConfirm !== '') ? colorByErrorValue(errors.passwordConfirm, values.passwordConfirm) : ''}
          help={(touched.passwordConfirm || values.passwordConfirm !== '') ? errors.passwordConfirm : []}
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
    } else if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = [{
        color: 'danger',
        message: form.passwordDontMatch
      }]
    }

    if (!values.email) {
      errors.email = [{
        color: 'danger',
        message: form.fieldRequired
      }]
    } else if (!isEmail(values.email)) {
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

import React from 'react'
import { withFormik } from 'formik'
import { isEmpty } from 'lodash'

import Logotype from './../../assets/logotype.svg'

import { form } from './../../utils/locales'
import {
  validateColorsForm,
  validateTwoBarsForm,
  validateAllBarsForm,
  validaInputColor
} from './../../utils/validatesForm'
import Button from './../elements/Button'
import Input from './../elements/Input'
import Label from './../elements/Label'

import {
  Form,
  WrapperForm,
  FieldForm,
  HeaderForm,
  ListValidation,
  ItemValidationOneLetter,
  ItemValidationOneNumber,
  ItemValidationSixLetter,
  MessageValidationForm,
  BarValidationForm,
  BarItemOneValidationForm,
  BarItemTwoValidationForm,
  BarItemThreeValidationForm
} from './styles/RegisterForm.style'

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  isValid
}) => {
  const errorFullName = touched.fullName && errors.fullName
  const errorEmail = touched.email && errors.email
  const errorPasswordConfirm = touched.passwordConfirm && errors.passwordConfirm
  const {
    passwordOneNumber,
    passwordOneLetter,
    passwordAtLeastSixCharacteres
  } = errors
  return (
    <Form onSubmit={handleSubmit} error={isValid}>
      <FieldForm>
        <Label name='fullName'>{form.fullname}</Label>
        <Input
          name='fullName'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.fullName}
          color={validaInputColor(errorFullName, values.fullName)}
        />
        {
          errorFullName &&
          <MessageValidationForm>
            {errors.fullName}
          </MessageValidationForm>
        }
      </FieldForm>
      <FieldForm>
        <Label name='email'>{form.email}</Label>
        <Input
          name='email'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
          color={validaInputColor(errorEmail, values.email)}
        />
        {
          errorEmail &&
          <MessageValidationForm>
            {errors.email}
          </MessageValidationForm>
        }
      </FieldForm>
      <FieldForm style={{marginBottom: '.5rem'}}>
        <Label name='password'>{form.password}</Label>
        <Input
          type='password'
          name='password'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.password}
          color={validateColorsForm(errors)}
        />
      </FieldForm>
      <BarValidationForm>
        <BarItemOneValidationForm color={validateColorsForm(errors)} />
        <BarItemTwoValidationForm color={validateTwoBarsForm(errors)} />
        <BarItemThreeValidationForm color={validateAllBarsForm(errors)} />
      </BarValidationForm>
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
          color={validaInputColor(errorPasswordConfirm, values.passwordConfirm)}
        />
        {
          errorPasswordConfirm &&
          <MessageValidationForm>
            {errors.passwordConfirm}
          </MessageValidationForm>
        }
      </FieldForm>
      <Button block isSuccess type='submit' disabled={isSubmitting}>
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
    const errors = {}

    errors.passwordOneNumber = /[0-9]/.test(values.password)
    errors.passwordOneLetter = /[A-Z]/.test(values.password)
    errors.passwordAtLeastSixCharacteres = /.{6,}/.test(values.password)

    if (!values.fullName) {
      errors.fullName = form.fieldRequired
    }
    if (!values.password) {
      errors.password = form.fieldRequired
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = form.fieldRequired
    }
    if (!values.email) {
      errors.email = form.fieldRequired
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = form.invalidEmail
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

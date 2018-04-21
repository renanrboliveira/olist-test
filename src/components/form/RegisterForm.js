import React from 'react'
import { withFormik } from 'formik'
import ButtoGeneral from './../general/ButtonGeneral'
import Logotype from './../../assets/logotype.svg'

import {
  Form,
  WrapperForm,
  FieldForm,
  LabelForm,
  InputForm,
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

const validateSuccessColorForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => (
  passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres ? '#1FE6A8' : '#EAEAF4'
)
const validateColorsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => {
  let color = '#EAEAF4'
  if (passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres) {
    color = '#1FE6A8'
  } else if ((passwordOneNumber && passwordOneLetter) ||
    (passwordAtLeastSixCharacteres && passwordOneLetter) ||
      (passwordAtLeastSixCharacteres && passwordOneNumber)) {
    color = '#F7BC1C'
  } else if (passwordOneNumber || passwordOneLetter) {
    color = '#F79682'
  }

  return color
}

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
  const errorPasswordOneNumber = errors.passwordOneNumber
  const errorPasswordOneLetter = errors.passwordOneLetter
  const errorPasswordAtLeastSixCharacteres = errors.passwordAtLeastSixCharacteres

  return (
    <Form onSubmit={handleSubmit} error={isValid}>
      <FieldForm>
        <LabelForm htmlFor='fullName'>Nome Completo</LabelForm>
        <InputForm
          id='fullName'
          type='text'
          name='fullName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          error={errorFullName}
        />
        {
          errorFullName &&
          <MessageValidationForm>
            {errors.fullName}
          </MessageValidationForm>
        }
      </FieldForm>
      <FieldForm>
        <LabelForm htmlFor='email'>Email</LabelForm>
        <InputForm
          id='email'
          type='text'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errorEmail}
        />
        {
          errorEmail &&
          <MessageValidationForm>
            {errors.email}
          </MessageValidationForm>
        }
      </FieldForm>
      <FieldForm style={{marginBottom: '.5rem'}}>
        <LabelForm htmlFor='password'>Senha</LabelForm>
        <InputForm
          id='password'
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          color={validateColorsForm(errors)}
        />
      </FieldForm>
      <BarValidationForm>
        <BarItemOneValidationForm color={validateColorsForm(errors)} />
        <BarItemTwoValidationForm style={{
          backgroundColor: errorPasswordOneNumber && errorPasswordOneLetter && errorPasswordAtLeastSixCharacteres ? '#1FE6A8'
            : (errorPasswordOneNumber && errorPasswordOneLetter) || errorPasswordAtLeastSixCharacteres ? '#F7BC1C' : '#EAEAF4'}} />
        <BarItemThreeValidationForm color={validateSuccessColorForm(errors)} />
      </BarValidationForm>
      <ListValidation>
        <ItemValidationOneLetter error={errorPasswordAtLeastSixCharacteres}>
          Pelo menos 6 caracteres
        </ItemValidationOneLetter>
        <ItemValidationOneNumber error={errorPasswordOneLetter}>
          Pelo menos 1 letra maiúscula
        </ItemValidationOneNumber>
        <ItemValidationSixLetter error={errorPasswordOneNumber}>
          Pelo menos 1 número
        </ItemValidationSixLetter>
      </ListValidation>
      <FieldForm last>
        <LabelForm htmlFor='passwordConfirm'>Confirme sua senha</LabelForm>
        <InputForm
          id='passwordConfirm'
          type='passwordConfirm'
          name='passwordConfirm'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
          error={errorPasswordConfirm}
        />
        {
          errorPasswordConfirm &&
          <MessageValidationForm>
            {errors.passwordConfirm}
          </MessageValidationForm>
        }
      </FieldForm>
      <ButtoGeneral type='submit' disabled={isSubmitting}>
        Criar conta
      </ButtoGeneral>
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
      errors.fullName = 'Esse campo é obrigatório'
    }
    if (!values.password) {
      errors.password = 'Esse campo é obrigatório'
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = 'Esse campo é obrigatório'
    }
    if (!values.email) {
      errors.email = 'Esse campo é obrigatório'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Email inválido'
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
      <h3>Criar sua conta</h3>
    </HeaderForm>
    <MyForm />
  </WrapperForm>
)

export default RegisterForm

import React from 'react'

import { form } from './../../utils/locales'
import Button from './../../components/base/Button'
import Input from './../../components/base/Input'
import Label from './../../components/base/Label'
import StepsBar from './../../components/base/StepsBar'
import ValidationRules from './../../components/base/ValidationRules'
import {
  colorByErrorValue,
  colorByErrorValuePassword
} from './../../utils/utils'

import {
  Form,
  FieldForm
} from './styles/RegisterForm.style'

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  const errorValidationRules = errors.validationRules && errors.validationRules.length
  const errorFullName = touched.fullName || values.fullName !== ''
  const errorEmail = touched.email || values.email !== ''
  const errorPassword = touched.password || values.password !== ''
  const errorPasswordConfirm = touched.passwordConfirm || values.passwordConfirm !== ''

  return (
    <Form onSubmit={handleSubmit}>
      <FieldForm>
        <Label name='fullName'>{form.fullname}</Label>
        <Input
          name='fullName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          color={colorByErrorValue(errors.fullName, values.fullName, touched.fullName)}
          help={errorFullName ? errors.fullName : null}
        />
      </FieldForm>
      <FieldForm>
        <Label name='email'>{form.email}</Label>
        <Input
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          color={colorByErrorValue(errors.email, values.email, touched.email)}
          help={errorEmail ? errors.email : null}
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
          color={errorPassword ? colorByErrorValuePassword(errors.password, values.password, errorValidationRules) : ''}
          help={errorPassword ? errors.password : null}
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
          color={colorByErrorValue(errors.passwordConfirm, values.passwordConfirm, touched.passwordConfirm)}
          help={errorPasswordConfirm ? errors.passwordConfirm : null}
        />
      </FieldForm>
      <Button block color='success' type='submit' disabled={isSubmitting}>
        {form.labelButtonRegister}
      </Button>
    </Form>
  )
}

export default RegisterForm

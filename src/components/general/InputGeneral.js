import React from 'react'
import PropTypes from 'prop-types'
import InputGeneral from './styles/InputGeneral.style'

const Input = ({
  name,
  value,
  type,
  handleChange,
  handleBlur,
  error
}) => (
  <InputGeneral
    id={name}
    type={type || 'text'}
    name={name}
    onChange={handleChange}
    onBlur={handleBlur}
    value={value}
    error={error}
  />
)

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
}

export default Input
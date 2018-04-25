import React from 'react'
import PropTypes from 'prop-types'
import Label from './styles/LabelGeneral.style'

const LabelGeneral = ({ children, name }) => (
  <Label htmlFor={name}>{children}</Label>
)

LabelGeneral.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string
}

export default LabelGeneral

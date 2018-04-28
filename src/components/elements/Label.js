import React from 'react'
import PropTypes from 'prop-types'
import LabelStyle from './styles/Label.style'

/**
 *
 * @example ./examples/Label.md
 */

const Label = ({ children, name }) => (
  <LabelStyle htmlFor={name}>{children}</LabelStyle>
)

Label.propTypes = {
  /** name Label */
  children: PropTypes.string,
  /** htmlFor Label */
  name: PropTypes.string
}

export default Label

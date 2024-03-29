import React from 'react'
import PropTypes from 'prop-types'
import { InputStyle, MessageStyle } from './Input.style'

/**
 *
 * @example ./Input.md
 */

const Input = ({
  name,
  type,
  color,
  help,
  onChange,
  onBlur
}) => (
  <div>
    <InputStyle
      id={name}
      type={type}
      name={name}
      color={color}
      onChange={onChange}
      onBlur={onBlur}
    />
    {help && (
      <MessageStyle color={help.color}>
        {help.message}
      </MessageStyle>
    )}
  </div>
)

Input.propTypes = {
  /** name set id and name */
  name: PropTypes.string,
  /** type input, example text, password */
  type: PropTypes.string,
  /** color border and focus input */
  color: PropTypes.string,
  /** message above input and can change color(success, danger, warning, default)
   * e.g. { color: 'success', message: 'hello world'} */
  help: PropTypes.object
}

Input.defaultProps = {
  type: 'text'
}

export default Input

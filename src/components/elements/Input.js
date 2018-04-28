import React from 'react'
import PropTypes from 'prop-types'
import { InputStyle, MessageStyle } from './styles/Input.style'

/**
 *
 * @example ./examples/Input.md
 */

const Input = ({
  name,
  type,
  color,
  help
}) => (
  <div>
    <InputStyle
      id={name}
      type={type}
      name={name}
      color={color}
    />
    {help && help.map((obj) => (
      <MessageStyle color={obj.color}>
        {obj.message}
      </MessageStyle>
    ))}
  </div>
)

Input.propTypes = {
  /** name set id and name */
  name: PropTypes.string,
  /** type input, example text, password */
  type: PropTypes.string,
  /** color border and focus input */
  color: PropTypes.string,
  /**  */
  help: PropTypes.array
}

Input.defaultProps = {
  type: 'text'
}

export default Input

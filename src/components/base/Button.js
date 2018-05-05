import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyle } from './styles/Button.style'

/**
 *
 * @example ./examples/Button.md
 */

const Button = ({
  children,
  block,
  color
}) => (
  <ButtonStyle
    block={block}
    color={color}>
    {children}
  </ButtonStyle>
)

Button.propTypes = {
  /** label Button */
  children: PropTypes.string,
  /** full size Button */
  block: PropTypes.bool,
  /** colors buttons Button */
  color: PropTypes.string
}

export default Button

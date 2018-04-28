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
  success,
  warning,
  danger
}) => (
  <ButtonStyle
    block={block}
    success={success}
    warning={warning}
    danger={danger}>
    {children}
  </ButtonStyle>
)

Button.propTypes = {
  /** label Button */
  children: PropTypes.string,
  /** full size Button */
  block: PropTypes.bool,
  /** color success Button */
  success: PropTypes.bool,
  /** color warning Button */
  warning: PropTypes.bool,
  /** color danger Button */
  danger: PropTypes.bool
}

export default Button

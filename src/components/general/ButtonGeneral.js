import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles/ButtonGeneral.style'

/**
 * A regular ButtonGeneral
 *
 * @example ./examples/ButtonGeneral.md
 */

const ButtonGeneral = ({ children }) => (
  <Button>
    {children}
  </Button>
)

ButtonGeneral.propTypes = {
  children: PropTypes.string
}

export default ButtonGeneral

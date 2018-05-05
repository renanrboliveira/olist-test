import React from 'react'
import PropTypes from 'prop-types'
import { times } from 'lodash'
import { Bar, Step } from './StepsBar.style'

/**
 *
 * @example ./StepsBar.md
 */

const StepsBar = ({
  size,
  current
}) => (
  <Bar>
    {
      times(size).map((index) => (
        <Step key={index} color={current <= size / 3 && current > index ? 'danger'
          : current < size && current > index ? 'warning'
            : current === size ? 'success' : ''} />
      ))
    }
  </Bar>
)

StepsBar.propTypes = {
  /** size of steps */
  size: PropTypes.number,
  /** current define the total of steps selected */
  current: PropTypes.number
}

StepsBar.defaultProps = {
  size: 3
}

export default StepsBar

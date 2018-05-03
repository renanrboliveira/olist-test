import React from 'react'
import { times } from 'lodash'
import { Bar, Step } from './styles/StepsBar.style'

/**
 *
 * @example ./examples/StepsBar.md
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

export default StepsBar

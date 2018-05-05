import React from 'react'
import PropTypes from 'prop-types'
import {
  ValidationRulesStyle,
  ValidationRuleStyle
} from './ValidationRules.style'

/**
 *
 * @example ./ValidationRules.md
 */

const ValidationRules = ({ rules, currentRules }) => (
  <ValidationRulesStyle>
    {rules && rules.map((rule, index) =>
      <ValidationRuleStyle
        key={index}
        color={currentRules !== undefined && currentRules.includes(rule)
          ? 'success' : currentRules
            ? 'danger' : ''}>
        {rule}
      </ValidationRuleStyle>
    )}
  </ValidationRulesStyle>
)

ValidationRules.propTypes = {
  /** Define the total of rules is show, your content should have type string */
  rules: PropTypes.array,
  /** Define the rule selected */
  currentRules: PropTypes.array
}

export default ValidationRules

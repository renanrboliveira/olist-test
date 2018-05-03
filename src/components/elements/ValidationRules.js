import React from 'react'
import {
  ValidationRulesStyle,
  ValidationRuleStyle
} from './styles/ValidationRules.style'

/**
 *
 * @example ./examples/ValidationRules.md
 */

const ValidationRules = ({ rules, currentRules }) => (
  <ValidationRulesStyle>
    {rules.map((rule, index) =>
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

export default ValidationRules

import React from 'react'
import { shallow } from 'enzyme'

import ValidationRules from './index'

describe('(Element) ValidationRules', () => {
  it('should have renders without crash', () => {
    const wrapper = shallow(<ValidationRules />)
    expect(wrapper).toHaveLength(1)
  })
})

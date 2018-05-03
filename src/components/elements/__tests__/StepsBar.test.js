import React from 'react'
import { shallow } from 'enzyme'

import StepsBar from '../StepsBar'

describe('(Element) StepsBar', () => {
  it('should have renders without crash', () => {
    const wrapper = shallow(<StepsBar />)
    expect(wrapper).toHaveLength(1)
  })
})

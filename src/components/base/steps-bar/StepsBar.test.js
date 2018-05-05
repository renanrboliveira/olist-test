import React from 'react'
import { shallow } from 'enzyme'

import StepsBar from './index'

describe('(Element) StepsBar', () => {
  it('should have renders without crash', () => {
    const wrapper = shallow(<StepsBar />)
    expect(wrapper).toHaveLength(1)
  })
})

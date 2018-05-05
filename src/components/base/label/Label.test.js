import React from 'react'
import { shallow } from 'enzyme'

import Label from './index'

describe('(Element) Label', () => {
  it('should have renders without crash', () => {
    const wrapper = shallow(<Label />)
    expect(wrapper).toHaveLength(1)
  })
})

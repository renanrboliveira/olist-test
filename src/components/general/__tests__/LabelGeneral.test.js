import React from 'react'
import { shallow } from 'enzyme'

import LabelGeneral from '../LabelGeneral'

describe('(Component) LabelGeneral', () => {
  it('should have renders without crash', () => {
    const wrapper = shallow(<LabelGeneral />)
    expect(wrapper).toHaveLength(1)
  })
})

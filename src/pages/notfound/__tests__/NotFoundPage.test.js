import React from 'react'
import { shallow } from 'enzyme'

import NotFoundPage from '../index'

const wrapper = shallow(<NotFoundPage />)

describe('(Component) NotFoundPage', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})

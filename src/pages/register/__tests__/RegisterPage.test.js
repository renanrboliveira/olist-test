import React from 'react'
import { shallow } from 'enzyme'

import RegisterPage from '../index'

const wrapper = shallow(<RegisterPage />)

describe('(Component) RegisterPage', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})

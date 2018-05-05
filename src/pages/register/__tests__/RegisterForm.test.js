import React from 'react'
import { shallow } from 'enzyme'

import RegisterForm from '../index'

const wrapper = shallow(<RegisterForm />)

describe('(Component) LoginForm', () => {
  it('should have renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})

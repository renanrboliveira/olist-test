import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('(Element) Button', () => {
  it('should have renders withour crash', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toHaveLength(1)
  })
})

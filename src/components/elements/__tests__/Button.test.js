import React from 'react'
import { shallow } from 'enzyme'
import Button from './../Button'

describe('(Element) Button', () => {
  it('should have renders withour crash', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toHaveLength(1)
  })
  it('should have renders block', () => {
    const wrapper = shallow(<Button block />)
    expect(wrapper).toHaveLength(1)
  })
})

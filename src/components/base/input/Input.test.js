import React from 'react'
import { render } from 'enzyme'
import Input from './index'

describe('(Element) Input', () => {
  it('should have render whithout crash', () => {
    const wrapper = render(<Input />)
    expect(wrapper).toHaveLength(1)
  })
})

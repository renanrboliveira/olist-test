import React from 'react'
import { render } from 'enzyme'
import InputGeneral from './../InputGeneral'

describe('(Component) InputGeneral', () => {
  it('should have render whithout crash', () => {
    const wrapper = render(<InputGeneral />)
    expect(wrapper).toHaveLength(1)
  })
})

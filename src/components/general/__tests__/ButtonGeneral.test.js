import React from 'react'
import { shallow } from 'enzyme'
import ButtonGeneral from './../ButtonGeneral'

describe('(Component) ButtonGEneral', () => {
  it('should have renders withour crash', () => {
    const wrapper = shallow(<ButtonGeneral />)
    expect(wrapper).toHaveLength(1)
  })
})

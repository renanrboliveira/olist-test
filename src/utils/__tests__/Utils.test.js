import {
  colorByProps,
  colorByErrorValue,
  colorByErrorValuePassword,
  isNumber,
  isEmail,
  isLetterUppercase,
  isSixCharacteres
} from '../utils'
import theme from '../../styles/theme.style'

describe('Utils', () => {
  it('should have return color by props success', () => {
    const props = {
      theme,
      color: 'success'
    }
    expect(colorByProps(props)).toBe(theme.success)
  })
  it('should have return color default by props empty', () => {
    const props = {
      theme,
      color: ''
    }
    expect(colorByProps(props)).toBe(theme.default)
  })
  it('should have return color danger by error', () => {
    const error = true
    expect(colorByErrorValue(error)).toBe('danger')
  })
  it('should have return color danger by error', () => {
    const error = true
    expect(colorByErrorValue(error)).toBe('danger')
  })
  it('should have return color success by value', () => {
    const error = false
    const value = 'test'
    expect(colorByErrorValue(error, value)).toBe('success')
  })
  it('should have return color empty by value empty', () => {
    const error = false
    const value = ''
    expect(colorByErrorValue(error, value)).toBe('')
  })
  it('should have return color danger by error in value password', () => {
    const error = true
    const value = ''
    const current = 0
    expect(colorByErrorValuePassword(error, value, current)).toBe('danger')
  })
  it('should have return color danger by step 1', () => {
    const error = false
    const value = 'test'
    const current = 1
    expect(colorByErrorValuePassword(error, value, current)).toBe('danger')
  })
  it('should have return color wargning by step 2', () => {
    const error = false
    const value = 'tes'
    const current = 2
    expect(colorByErrorValuePassword(error, value, current)).toBe('warning')
  })
  it('should have return color wargning by step 3', () => {
    const error = false
    const value = 'tes'
    const current = 3
    expect(colorByErrorValuePassword(error, value, current)).toBe('success')
  })
  it('should have return empty by steps', () => {
    const error = false
    const value = ''
    const current = 0
    expect(colorByErrorValuePassword(error, value, current)).toBe('')
  })
  it('should have verify is a number', () => {
    expect(isNumber(1)).toBe(true)
  })
  it('should have verify is not a number', () => {
    expect(isNumber('asdfas')).toBe(false)
  })
  it('should have verify is a email correct', () => {
    expect(isEmail('ren@test.com')).toBe(true)
  })
  it('should have verify is incorrect email', () => {
    expect(isEmail('ren@.com')).toBe(false)
  })
  it('should have verify is six characteres', () => {
    expect(isSixCharacteres('a123sq')).toBe(true)
  })
  it('should have verify is not six characteres', () => {
    expect(isSixCharacteres('a123')).toBe(false)
  })
  it('should have verify is not six characteres with number', () => {
    expect(isSixCharacteres(123456)).toBe(true)
  })
  it('should have verify is letters uppercase', () => {
    expect(isLetterUppercase('A')).toBe(true)
  })
  it('should have verify is letters uppercase with multi', () => {
    expect(isLetterUppercase('AAA')).toBe(true)
  })
  it('should have verify is not letters uppercase', () => {
    expect(isLetterUppercase('a')).toBe(false)
  })
})

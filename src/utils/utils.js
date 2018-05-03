export const colorByProps = (props) => {
  const colors = {
    'success': {
      color: props.theme.success
    },
    'danger': {
      color: props.theme.danger
    },
    'warning': {
      color: props.theme.warning
    }
  }[props.color]

  return colors ? colors.color : props.theme.default
}

export const colorByErrorValue = (error, value) => (
  error ? 'danger' : value ? 'success' : ''
)
export const colorByErrorValuePassword = (error, value, current) => (
  error ? 'danger' : value && current === 1
    ? 'danger' : value && current === 2
      ? 'warning' : value && current === 3
        ? 'success' : ''
)

export const isNumber = value => /[0-9]/.test(value)

export const isLetterUppercase = value => /[A-Z]/.test(value)

export const isSixCharacteres = value => /.{6,}/.test(value)

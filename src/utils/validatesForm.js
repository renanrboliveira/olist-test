import theme from './../styles/theme.style'

export const validateAllBarsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => (
  passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres ? theme.success : theme.default
)

export const validateTwoBarsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => {
  let color = theme.default

  if (passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres) {
    color = theme.success
  } else if ((passwordOneNumber && passwordAtLeastSixCharacteres) ||
  (passwordOneLetter && passwordAtLeastSixCharacteres) ||
  (passwordOneLetter && passwordOneNumber)) {
    color = theme.warning
  }

  return color
}
export const validateColorsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => {
  let color = theme.default

  if (passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres) {
    color = theme.success
  } else if ((passwordOneNumber && passwordAtLeastSixCharacteres) ||
    (passwordOneLetter && passwordAtLeastSixCharacteres) ||
    (passwordOneLetter && passwordOneNumber)) {
    color = theme.warning
  } else if (passwordOneNumber || passwordOneLetter || passwordAtLeastSixCharacteres) {
    color = theme.danger
  }

  return color
}

export const validaInputColor = (erro, value) => (
  erro ? theme.danger : value !== '' ? theme.success : ''
)

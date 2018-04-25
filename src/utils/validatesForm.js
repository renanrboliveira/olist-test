export const validateAllBarsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => (
  passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres ? '#1FE6A8' : '#EAEAF4'
)

export const validateTwoBarsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => {
  let color = '#EAEAF4'

  if (passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres) {
    color = '#1FE6A8'
  } else if ((passwordOneNumber && passwordAtLeastSixCharacteres) ||
    (passwordOneLetter && passwordAtLeastSixCharacteres) ||
    (passwordOneLetter && passwordOneNumber)) {
    color = '#F7BC1C'
  }

  return color
}
export const validateColorsForm = ({
  passwordOneNumber,
  passwordOneLetter,
  passwordAtLeastSixCharacteres
}) => {
  let color = '#EAEAF4'

  if (passwordOneNumber && passwordOneLetter && passwordAtLeastSixCharacteres) {
    color = '#1FE6A8'
  } else if ((passwordOneNumber && passwordAtLeastSixCharacteres) ||
    (passwordOneLetter && passwordAtLeastSixCharacteres) || (passwordOneLetter && passwordOneNumber)) {
    color = '#F7BC1C'
  } else if (passwordOneNumber || passwordOneLetter || passwordAtLeastSixCharacteres) {
    color = '#F79682'
  }

  return color
}

export const isNumber = () => {}
export const isEmail = () => {}
export const isLetterUpCase = () => {}
export const isAtLeastSixCharactere = () => {}

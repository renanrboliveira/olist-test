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

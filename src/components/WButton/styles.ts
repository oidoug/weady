import { StyleSheet } from 'react-native'

import { colors } from '../../app.styles'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 44,
    backgroundColor: colors.detailBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.textColor,
  }
})
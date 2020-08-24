import { StyleSheet } from 'react-native'

import { colors } from '../../app.styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  logo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingVertical: 30,
  },
  headerButton: {
    marginHorizontal: 30,
  },
})
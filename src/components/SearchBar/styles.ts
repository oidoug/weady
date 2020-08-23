import { StyleSheet } from 'react-native'

import { colors } from '../../app.styles'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  icon: {
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  line: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 30,
    height: 2,
    backgroundColor: colors.detailColor,
  }
})
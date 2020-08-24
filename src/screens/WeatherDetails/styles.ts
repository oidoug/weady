import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../app.styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    marginVertical: 20,
    fontSize: 36,
  },
  body: {
    marginTop: -20,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 64,
    fontWeight: 'bold',
    // Forced positioning to achive visual equilibrium.
    bottom: -32,
    left: 5,
  },
  value: {
    fontSize: 18,
  },
  tag: {
    fontSize: 10,
  },
  paddingLeft: {
    left: -7,
  },
  // Represents a 20pts increment.
  spacer: {
    marginVertical: 10,
  },
  map: {
    flex: 1,
  },
  mapView: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  mapPadding: {
    top: 0,
    left: 30,
    bottom: 30,
    right: 0,
  }
})
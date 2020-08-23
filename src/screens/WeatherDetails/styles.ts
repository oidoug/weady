import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
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
    margin: 30,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
  tag: {
    fontSize: 10,
  },
// Represents a 20pts increment.
  spacer: {
    marginVertical: 10,
  },
  map: {
    flex: 1,
    backgroundColor: '#000',
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
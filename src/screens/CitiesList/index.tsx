import React from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native'

import { styles } from './styles'

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

/**
 * CitiesList screen
 * initial screen and used to add new cities to watch.
 */
const CitiesList = () => {

  const renderItem = ({ item }) => (
    <CityCell title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default CitiesList
import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native'

import { getCities, CityProps } from '../../service/save'

import CityCell, { CityCellProps } from '../../components/CityCell'

import { styles } from './styles'

/**
 * CitiesList screen
 * initial screen and used to add new cities to watch.
 */
const CitiesList = ({ navigation }: any) => {

  const [cities, setCities] = useState<CityProps[]>([])

  // Load cities asynchronously
  useEffect(() => {
    getCities().then((data) => {
      setCities(data!)
    })
  }, [])

  const renderItem = ({ item }: any) => (
    <CityCell
      title={item.name}
      timezone={item.timezone}
      onPress={() => {
        navigation.navigate('WeatherDetails', {
          id: item.id,
          name: item.name,
        })
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  )
}

export default CitiesList
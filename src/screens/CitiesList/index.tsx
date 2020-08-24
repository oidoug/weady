import React, { useState, useContext, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

import SVG from '../../components/SVG'

// Custom hook useStoreCities
import { Storage } from '../../service/save'

import CityCell from '../../components/CityCell'

import { colors } from '../../app.styles'
import { styles } from './styles'

/**
 * CitiesList screen
 * initial screen and used to add new cities to watch.
 */
const CitiesList = ({ navigation }: any) => {

  const {cities, removeCity} = useContext(Storage)
  const [editMode, setEditMode] = useState(false)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            setEditMode(!editMode)
          }}
        >
          <MaterialIcons name={editMode ? "close" : "mode-edit"} size={24} color={colors.detailColor} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            navigation.navigate('AddCity')
          }}
        >
          <MaterialIcons name="add" size={24} color={colors.detailColor} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, editMode]);

  useEffect(() => {
    console.log('cities changed: ')
    console.log(cities)
  }, [cities])

  const renderItem = ({ item }: any) => (
    <CityCell
      title={item.name}
      timezone={item.timezone}
      editMode={editMode}
      onPress={() => {
        navigation.navigate('WeatherDetails', {
          id: item.id,
          name: item.name,
        })
      }}
      onDelete={async () => {
        removeCity(item.id)
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
      {/* { cities.length === 0
        ? <View style={styles.logo}>
            <SVG id="logo" />
        </View>
        : null
      }
      */}
    </SafeAreaView>
  )
}

export default CitiesList
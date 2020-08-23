import React, { useState } from 'react'
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'

import SearchBar from '../../components/SearchBar'

import { getWeather } from '../../service/api'
import { storeCity } from '../../service/save'

import { styles } from './styles'

/**
 * AddCity screen
 * initial screen and used to add new cities to watch.
 */
const AddCity = ({ navigation }: any) => {

  const [loading, setLoading] = useState(false)

  const searchCity = async (query: string) => {

    // if empty or null, no action can be performed.
    if (!query) return

    setLoading(true)

    try {
      const result = await getWeather(query)
      const { id, timezone, name } = result.data
      await storeCity({ id, timezone, name })
      // Save found city and navigate to list.
      // todo: save it.
      navigation.navigate('CitiesList')

    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Requested city was not found. Please try again.")
      } else {
        alert("We couldn't connect to the weather provider. Check your Internet and try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Image
              resizeMode='contain'
              source={require('../../../assets/background-img1.png')}
            />
          </View>
          <View style={styles.lower}>
            <SearchBar
              disabled={loading}
              placeholder="City name"
              onPress={(query: string) => {
                searchCity(query)
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default AddCity
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

import { styles } from './styles'

/**
 * AddCity screen
 * initial screen and used to add new cities to watch.
 */
const AddCity = () => {

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
              placeholder="City name"
              onPress={() => {
                alert("search")
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default AddCity
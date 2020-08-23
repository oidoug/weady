import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../../app.styles'
import { styles } from './styles'

interface SearchBarProps {
  onPress: any,
  placeholder: string,
  disabled: boolean,
}

/**
 * SearchBar component
 * @param onPress Callback function called when the field is filled and user ends the edit.
 * @param placeholder Default text to be draw.
 */
const SearchBar = ({onPress, placeholder, disabled} : SearchBarProps) => {
  const [query, setQuery] = useState('')

  return (
    <View style={styles.row}>
      <View style={styles.line} />
      <View style={styles.icon}>
        <MaterialIcons name="search" size={24} color={colors.detailColor} />
      </View>
      <TextInput
        style={styles.input}
        returnKeyType="search"
        placeholder={placeholder}
        onChangeText={text => setQuery(text)}
        onSubmitEditing={() => {
          onPress(query)
        }}
        editable={!disabled}
      />
      <TouchableOpacity
        onPress={() => onPress(query)}
      >
        <View style={styles.icon}>
          <MaterialIcons name="arrow-forward" size={24} color={colors.detailColor} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

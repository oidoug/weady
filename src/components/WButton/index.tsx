import React from 'react'

import {
  TouchableOpacity,
  Text,
} from 'react-native'

import { styles } from './styles'

interface WButtonProps {
  onPress: any,
  title: string,
}

const WButton = ({onPress, title}: WButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default WButton
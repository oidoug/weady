import React from 'react'
import {
  View,
  Text,
} from 'react-native'

import { styles } from './styles'

interface CityCellProps {
  title: string
}

const CityCell = ({ title }: CityCellProps) => (
  <View style={styles.cell}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { adjustedDate, hourMinutesFormat } from '../../service/date'

import { styles } from './styles'

export interface CityCellProps {
  title: string,
  timezone: number,
  onPress: any,
}

const CityCell = ({ title, timezone, onPress }: CityCellProps) => {

  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{hourMinutesFormat(adjustedDate(new Date(), timezone))}</Text>
    </TouchableOpacity>
  );
}

export default CityCell
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { adjustedDate, hourMinutesFormat } from '../../service/date'

import { colors } from '../../app.styles'
import { styles } from './styles'

export interface CityCellProps {
  title: string,
  timezone: number,
  editMode: boolean,
  onPress: any,
  onDelete: any,
}

const CityCell = ({ title, timezone, editMode, onPress, onDelete }: CityCellProps) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{hourMinutesFormat(adjustedDate(new Date(), timezone))}</Text>
      </TouchableOpacity>
      { editMode
        && <TouchableOpacity onPress={onDelete}>
          <MaterialCommunityIcons name="delete-outline" size={24} color={colors.detailColor} />
        </TouchableOpacity>
      }
    </View>
  );
}

export default CityCell
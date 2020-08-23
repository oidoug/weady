import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import MapView from 'react-native-maps'

import { getWeatherById } from '../../service/api'

import { styles } from './styles'
import mapStyle from './map.style.json'

/**
 * WeatherDetails screen
 * initial screen and used to add new cities to watch.
 */
const WeatherDetails = ({ route }: any) => {

  const { id } = route.params;
  const { name } = route.params;

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)
    try {
      getWeatherById(id).then((result) => {
        console.log(result.data)
        setData(result.data)
      })
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("It appears this city it's not available at the database anymore. Please try another one.")
      } else {
        alert("We couldn't connect to the weather provider. Check your Internet and try again.")
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Image
          style={styles.image}
          source={require('../../../assets/background-img1.png')}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle}>{data ? data.main.temp : "..."}</Text>
        <View style={styles.spacer} />
        <View style={styles.line}>
          <Text style={styles.value}>Value</Text>
          <Text style={styles.value}>Value</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.tag}>max.</Text>
          <Text style={styles.tag}>min.</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.line}>
          <Text style={styles.value}>Value</Text>
          <Text style={styles.value}>Value</Text>
          <Text style={styles.value}>Value</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.tag}>humidity</Text>
          <Text style={styles.tag}>wind</Text>
          <Text style={styles.tag}>pressure</Text>
        </View>
      </View>
      <View style={styles.map}>
        <MapView
          style={styles.mapView}
          customMapStyle={mapStyle}
          provider="google"
          mapPadding={styles.mapPadding}
          initialRegion={region}
          region={region}
        />
      </View>
    </View>
  )
}

export default WeatherDetails
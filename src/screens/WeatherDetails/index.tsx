import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import MapView from 'react-native-maps'

import SVG from '../../components/SVG'

import { getWeatherById } from '../../service/api'

import { styles } from './styles'
import mapStyle from './map.style.json'

const emptyData = {
  main: {
    temp_max: '...',
    temp_min: '...',
    temp: null,
    humidity: '...',
    pressure: '...',
  },
  wind: {
    speed: '...',
  },
  coord: {
    lat: 51.51,
    lon: -0.13,
  },
  weather: [{ icon: "01d" }],
}

const emptyCoord = {
  latitude: 51.51,
  longitude: -0.13,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
}

/**
 * WeatherDetails screen
 * initial screen and used to add new cities to watch.
 */
const WeatherDetails = ({ route }: any) => {

  const { id } = route.params;
  const { name } = route.params;

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(emptyData)
  const [region, setRegion] = useState(emptyCoord)

  useEffect(() => {
    setLoading(true)

    try {
      getWeatherById(id).then((result) => {
        setData(result.data)
        setRegion({
          ...region,
          latitude: result.data.coord.lat,
          longitude: result.data.coord.lon,
        })
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

  const rmDec = (value: string | null) => {
    return value ? Math.round(+value).toString() : ''
  }

  if (loading && data === undefined) return <></>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <SVG id={data.weather[0].icon}/>
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle}>
          {rmDec(data.main.temp)}°
        </Text>
        <View style={styles.line}>
          <Text style={styles.value}>{data.main.temp_max}</Text>
          <Text style={styles.value}>{data.main.temp_min}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.tag}>max.</Text>
          <Text style={styles.tag}>min.</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.line}>
          <Text style={styles.value}>{data.main.humidity}</Text>
          <Text style={styles.value}>{data.wind.speed}</Text>
          <Text style={styles.value}>{data.main.pressure}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.tag}>humidity</Text>
          <Text style={[styles.tag, styles.paddingLeft]}>wind</Text>
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
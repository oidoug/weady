/**
 * Save helper functions to store and retrive data from asyncstorage
 * Disclaimer: AsyncStore is coupled with native modules, so unit tests
 * are not applicable. Integration tests could be written.
 */

import AsyncStorage from '@react-native-community/async-storage';
import CitiesList from '../screens/CitiesList';

export interface CityProps {
  id: string,
  name: string,
  timezone: number,
}

export const storeCity = async (city: CityProps) => {
  try {
    // Update a counter of all cities added, useful for ordering.
    const counter = await AsyncStorage.getItem('@counter')
    // if counter is null, +null! === 0
    const order = (+counter! + 1).toString()
    await AsyncStorage.setItem(`@city${city.id}`, JSON.stringify({...city, order}))
    await AsyncStorage.setItem(`@counter`, order)
  } catch (e) {
    alert("Could not save city, please adding it again.")
  }
}

export const getCities = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const cities: CityProps[] = [];
    keys.forEach(async (id) => {
      if (id !== '@counter') {
        const citystr = await AsyncStorage.getItem(id)
        if (citystr) {
          cities.push(await JSON.parse(citystr))
        }
      }
    });
    return cities
  } catch (e) {
    alert("Could not read city list, please close and re-open the app.")
  }
}
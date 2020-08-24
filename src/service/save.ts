import React, { useState, useEffect, useContext, createContext } from 'react'
/**
 * Save custom hook, stores and retrives data from asyncstorage
 * Disclaimer: AsyncStore is coupled with native modules, so unit tests
 * are not applicable. Integration tests could be written.
 */
import AsyncStorage from '@react-native-community/async-storage';

export interface CityProps {
  id: string,
  name: string,
  timezone: number,
}

export interface StorageType {
  storeCity: (city: CityProps) => Promise<void>,
  removeCity: (id: string) => Promise<void>,
  getCount: () => Promise<number>,
  cities: CityProps[],
}

export const Storage = React.createContext({} as StorageType)

export const useProviderStorage = () => {

  const [cities, setCities] = useState<CityProps[]>([])

  // Load cities asynchronously
  useEffect(() => {
    updateCities()
  }, [])

  const storeCity = async (city: CityProps) => {
    // Update a counter of all cities added, useful for ordering.
    const counter = await AsyncStorage.getItem('@counter')
    // if counter is null, +null! === 0
    const order = (+counter! + 1).toString()
    await AsyncStorage.setItem(`@city${city.id}`, JSON.stringify({...city, order}))
    await AsyncStorage.setItem(`@counter`, order)
    await updateCities()
  }

  const removeCity = async (id: string) => {
    await AsyncStorage.removeItem(`@city${id}`)
    await updateCities()
  }

  const getCount = async () => {
    // Update a counter of all cities added, useful for ordering.
    const counter = await AsyncStorage.getItem('@counter')
    return +counter!
  }

  const updateCities = async () => {
    const keys = await AsyncStorage.getAllKeys()
    const anew: CityProps[] = [];
    keys.forEach(async (id) => {
      if (id !== '@counter') {
        const citystr = await AsyncStorage.getItem(id)
        if (citystr) {
          anew.push(await JSON.parse(citystr))
        }
      }
    });
    setCities(anew)
  }

  return {
    storeCity,
    removeCity,
    getCount,
    cities,
  }
}

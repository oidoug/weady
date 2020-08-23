import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddCity from './src/screens/AddCity'
import CitiesList from './src/screens/CitiesList'
import WeatherDetails from './src/screens/WeatherDetails'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent/>
      <Stack.Navigator>
        <Stack.Screen
          name="AddCity"
          component={AddCity}
          options={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="CitiesList"
          component={CitiesList}
          options={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="WeatherDetails"
          component={WeatherDetails}
          options={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

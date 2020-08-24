import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from './src/app.styles'

import AddCity from './src/screens/AddCity'
import CitiesList from './src/screens/CitiesList'
import WeatherDetails from './src/screens/WeatherDetails'

const Stack = createStackNavigator();

const BackButtonIcon = () => (
  <MaterialIcons
    style={{marginHorizontal: 30}}
    name="arrow-back"
    size={24}
    color={colors.detailColor}
  />
)

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent/>
      <Stack.Navigator>
        <Stack.Screen
          name="CitiesList"
          component={CitiesList}
          options={{
            title: "",
            headerTransparent: false,
            headerStyle: {
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="AddCity"
          component={AddCity}
          options={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              borderBottomWidth: 0,
            },
            headerBackImage: BackButtonIcon,
            headerBackTitleVisible: false,
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
            headerBackImage: BackButtonIcon,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

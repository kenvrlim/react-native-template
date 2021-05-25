import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const RootStack = createStackNavigator()

const RootNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="Main" component={HomeScreen} />
    </RootStack.Navigator>
  )
}

export default RootNavigator

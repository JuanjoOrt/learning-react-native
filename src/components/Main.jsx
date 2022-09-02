import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RepositoryList from './RepositoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestingPage from './TestingPage';
import { StatusBar } from 'expo-status-bar'
const Stack = createNativeStackNavigator();

export default function Main () {
  return (
    <NavigationContainer >
        <StatusBar style='light' />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}>
          <Stack.Screen name="Home" component={RepositoryList} />
          <Stack.Screen name="Testing" component={TestingPage} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

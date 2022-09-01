import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RepositoryList from './RepositoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Testing = () => <Text>Testing</Text>

export default function Main () {
  return (
    <NavigationContainer >
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={RepositoryList} />
          <Stack.Screen name="Testing" component={Testing} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

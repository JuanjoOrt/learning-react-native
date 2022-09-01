import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RepositoryList from './RepositoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from 'react-native';
import TestingPage from './TestingPage';
import Layout from './Layout';

const Stack = createNativeStackNavigator();

export default function Main () {
  return (
    <NavigationContainer >
      <Layout>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={RepositoryList} />
          <Stack.Screen name="Testing" component={TestingPage} />
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  )
}

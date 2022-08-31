import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList';

export default function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight  }}>
      <Text>Holiwi</Text>
      <RepositoryList />
    </View>
  )
}

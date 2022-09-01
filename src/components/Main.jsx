import React from 'react'
import Constants from 'expo-constants'
import { Text, View, nativeHistory } from 'react-native'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Router, Route } from 'react-router-native';

export default function Main () {
  return (
    <View >
      <AppBar />
      <RepositoryList />
    </View>
  )
}

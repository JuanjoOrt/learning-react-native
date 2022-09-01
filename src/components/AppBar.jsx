import React from 'react'
import {ViewPropTypes, StyleSheet, View, Text, ScrollView} from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';
import theme from '../theme'

function ItemBar ({children}) {
  return <StyledText fontWeight='bold' style={styles.text}>{children}</StyledText>
}

export default function AppBar () {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <ItemBar>Repositories</ItemBar>
        <ItemBar>Cosas</ItemBar>
        <ItemBar>Pruebas</ItemBar>
        <ItemBar>De Tabs</ItemBar>
        <ItemBar>Juanjo</ItemBar>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.colors.textWhite,
    paddingHorizontal: 10
  },
  scroll: {
    paddingBottom: 10
  }
})
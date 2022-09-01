import React from 'react'
import {ViewPropTypes, StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';
import theme from '../theme'
import {useNavigation, useRoute} from '@react-navigation/native';

function ItemBar ({children, to }) {
  const navigation = useNavigation();
  const route = useRoute()

  const textStyles = [
    styles.text,
    route.name === to && styles.active,
  ]

  return (
      <TouchableWithoutFeedback onPress={() => to && navigation.navigate(to)}>
        <View><StyledText fontWeight='bold' style={textStyles}>{children}</StyledText></View>
      </TouchableWithoutFeedback>
  )
}

export default function AppBar () {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <ItemBar to='Home'>Repositories</ItemBar>
        <ItemBar>Pruebas</ItemBar>
        <ItemBar>De Tabs</ItemBar>
        <ItemBar>Juanjo</ItemBar>
        <ItemBar to='Testing'>Testing</ItemBar>
        <ItemBar>Navbar</ItemBar>
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
    color: '#a9a9a9',
    paddingHorizontal: 10
  },
  scroll: {
    paddingBottom: 10
  },
  active: {
    color: theme.colors.textWhite,
  }
})

import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import StyledText from './StyledText';
import theme from '../theme'
import RepositoryStars from './RepositoryStars';
import RepositoryHeader from './RepositoryHeader';

export default function RepositoryItem ({ repo }) {
  return (
    <View style={styles.container}>
      <RepositoryHeader {...repo}/>
      <RepositoryStars {...repo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 20,
  }
})

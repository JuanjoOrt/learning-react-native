import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import RepositoryStars from './RepositoryStars';
import RepositoryHeader from './RepositoryHeader';

export default function RepositoryItem ({ repo }) {
  return (
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <View style={styles.container}>
        <RepositoryHeader {...repo}/>
        <RepositoryStars {...repo}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    paddingTop: 20,
    width: Dimensions.get('window').width >= 400 ? 400 : '90%',
    marginHorizontal: 20
  }
})

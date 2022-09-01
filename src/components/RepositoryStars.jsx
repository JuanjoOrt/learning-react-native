import {StyleSheet, View} from 'react-native';
import StyledText from './StyledText';
import React from 'react';

export default function RepositoryStars ({ stargazersCount, forkCount, reviewCount, ratingAverage }) {
  return (
    <View style={styles.container}>
      <View style={styles.countsItem}>
        <StyledText fontSize='small'>{stargazersCount}</StyledText>
        <StyledText fontSize='small' fontWeight='bold'>stars</StyledText>
      </View>
      <View style={styles.countsItem}>
        <StyledText fontSize='small'>{forkCount}</StyledText>
        <StyledText fontSize='small' fontWeight='bold'>forks</StyledText>
      </View>
      <View style={styles.countsItem}>
        <StyledText fontSize='small'>{reviewCount}</StyledText>
        <StyledText fontSize='small' fontWeight='bold'>reviewCount</StyledText>
      </View>
      <View style={styles.countsItem}>
        <StyledText fontSize='small'>{ratingAverage}</StyledText>
        <StyledText fontSize='small' fontWeight='bold'>rating</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  countsItem: {
    alignItems: 'center'
  }
})

import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import StyledText from './StyledText';

export default function RepositoryItem ({ repo }) {
  return (
    <View style={styles.container}>
      <StyledText fontSize='big' fontWeight='bold' color='blue'>id: {repo.id}</StyledText>
      <StyledText>fullname: {repo.fullName}</StyledText>
      <StyledText>description: {repo.description}</StyledText>
      <StyledText>language: {repo.language}</StyledText>
      <StyledText fontSize='small'>stars: {repo.stargazersCount}</StyledText>
      <StyledText fontSize='small'>forks: {repo.forkCount}</StyledText>
      <StyledText fontSize='small'>reviewCount: {repo.reviewCount}</StyledText>
      <StyledText fontSize='small'>rating: {repo.ratingAverage}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
})


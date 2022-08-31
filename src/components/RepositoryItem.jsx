import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import StyledText from './StyledText';

export default function RepositoryItem ({ repo, index }) {
  return (
    <View key={index} style={styles.container}>
      <StyledText bold big blue>id: repo.id</StyledText>
      <StyledText>fullname: {repo.fullName}</StyledText>
      <StyledText>description: {repo.description}</StyledText>
      <StyledText>language: {repo.language}</StyledText>
      <StyledText small>stars: {repo.stargazersCount}</StyledText>
      <StyledText small>forks: {repo.forkCount}</StyledText>
      <StyledText small>reviewCount: {repo.reviewCount}</StyledText>
      <StyledText small>rating: {repo.ratingAverage}</StyledText>
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


import {Image, StyleSheet, View} from 'react-native';
import StyledText from './StyledText';
import React from 'react';
import theme from '../theme';


export default function RepositoryHeader ({ ownerAvatarUrl, fullName, description, language }) {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View>
        <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
      </View>
      <View style={{ paddingLeft: 10, flex: 1 }}>
        <StyledText fontSize='big' fontWeight='bold' color='blue'>{fullName}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    alignSelf: 'flex-start',
    padding: 3,
    borderRadius: 6,
    marginTop: 3
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

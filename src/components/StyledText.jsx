import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../theme'

export default function StyledText ({ color, fontWeight, fontSize, children, ...rest }){
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontWeight === 'bold' && styles.bold,
    fontSize === 'big' && styles.big,
    fontSize === 'small' && styles.small
  ]

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary
  },
  bold: {
    fontWeight: theme.fontWeight.bold
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  big: {
    fontSize: theme.fontSizes.big
  },
  small: {
    fontSize: theme.fontSizes.subheading
  }
})

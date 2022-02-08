import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return <Text style={styles.text}>Prueba restaurante </Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    },
});

export default HomeScreen;

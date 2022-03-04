import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({value, setValue, onSubmitEditing}) {

    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                style={styles.textInput}
                placeholdedir='Search'
                value={value}
                onChangeText={setValue}
                autoCorrect={false}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: "center"
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
        marginLeft: 15
    },
    textInput: {
        flex: 1,
        height: '80%',
        marginHorizontal: 15,
        fontSize: 18
    }
});

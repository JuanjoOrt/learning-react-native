import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp'
import useGetProducts from "../hooks/useGetProducts";
import {Image} from "react-native-web";

export default function SearchScreen() {
    const [searchText, setSearchText] = useState('')
    const {result} = useGetProducts({searchText})

    return (
        <View>
            <View style={styles.searchBar} ><SearchBar value={searchText} setValue={setSearchText} /></View>
            <FlatList
                style={styles.body}
                data={result}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar: {
        paddingVertical: 15,
        backgroundColor: '#CAE9D7'
    },
    body: {
        marginTop: 50
    }
})

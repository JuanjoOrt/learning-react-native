import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import SearchBar from "../components/SearchBar";
import useGetProducts from "../hooks/useGetProducts";

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
                    <View style={styles.itemContainer}>
                        <View style={styles.imageCointainer}>
                            <Image style={styles.image} source={{uri: item.image}}/>
                        </View>
                        <Text style={styles.imageTitle}>{item.name}</Text>
                        <Text style={styles.imagePrice}>{item.price} €</Text>
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
        marginTop: 5,
        marginBottom: 100
    },
    itemContainer: {
        marginVertical: 20,
        width: '100%',
        alignItems: 'center'
    },
    imageCointainer: {
        width: '70%',
        height: 350,
        alignItems: "center"
    },
    image: {
        width: '80%',
        height: '100%',
    },
    imageTitle: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center'
    },
    imagePrice: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

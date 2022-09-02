import React, {useEffect, useState} from 'react'
import {FlatList, Text, View, StyleSheet, Dimensions} from 'react-native'
import RepositoryItem from './RepositoryItem';
import Layout from './Layout';

export default function RepositoryList () {
  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:tPom_P5B/repositories')
      .then(response => response.json())
      .then(response => setData(response))
  }, [])

  return (
    <Layout style={styles.container}>
      <View>

      </View>
      <FlatList
        data={data}
        renderItem={({item: repo}) => <RepositoryItem repo={repo}/>}
        keyExtractor={(item,) => item.id}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

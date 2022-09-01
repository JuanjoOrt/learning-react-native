import React from 'react'
import repositories from '../_data/repositories'
import {FlatList, Text, View} from 'react-native'
import RepositoryItem from './RepositoryItem';
import Layout from './Layout';

export default function RepositoryList () {
  return (
      <FlatList
        data={repositories}
        renderItem={({item: repo}) => <RepositoryItem repo={repo}/>}
        keyExtractor={(item,) => item.id}
      />
  )
}

import React from 'react'
import repositories from '../_data/repositories'
import {FlatList, Text, View} from 'react-native'
import RepositoryItem from './RepositoryItem';

export default function RepositoryList () {
  return (
    <FlatList
      data={repositories}
      renderItem={({item: repo, ...props}) => <RepositoryItem repo={repo} index={props.index}/>}
    />
  )
}

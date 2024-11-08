import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import OrderPicker from './OrderPicker'
import { useState } from 'react'
import SearchBar from './SearchBar'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({
  repositories,
  loading,
  navigate,
  setOrder,
  keyword,
  setKeyword,
}) => {
  if (loading) {
    return <Text>loading...</Text>
  }

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/${item.id}`)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
        ListHeaderComponent={
          <>
            <SearchBar keyword={keyword} setKeyword={setKeyword} />
            <OrderPicker setOrder={setOrder} />
          </>
        }
      />
    </View>
  )
}

const RepositoryList = () => {
  const [order, setOrder] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  })
  const [keyword, setKeyword] = useState('')

  const { repositories, loading } = useRepositories(order, keyword)
  const navigate = useNavigate()

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      navigate={navigate}
      setOrder={setOrder}
      setKeyword={setKeyword}
      keyword={keyword}
    />
  )
}

export default RepositoryList

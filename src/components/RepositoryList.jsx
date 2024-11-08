import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'

import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import OrderPicker from './OrderPicker'
import { useState } from 'react'

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
        ListHeaderComponent={<OrderPicker setOrder={setOrder} />}
      />
    </View>
  )
}

const RepositoryList = () => {
  const [order, setOrder] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  })

  const { repositories, loading } = useRepositories(order)
  const navigate = useNavigate()

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      navigate={navigate}
      setOrder={setOrder}
    />
  )
}

export default RepositoryList

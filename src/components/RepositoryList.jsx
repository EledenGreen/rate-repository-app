import { FlatList, View, StyleSheet, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, loading }) => {
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
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    </View>
  )
}

const RepositoryList = () => {
  const { repositories, loading } = useRepositories()

  return (
    <RepositoryListContainer repositories={repositories} loading={loading} />
  )
}

export default RepositoryList

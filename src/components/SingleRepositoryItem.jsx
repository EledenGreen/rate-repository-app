import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { REPOSITORY, REVIEW } from '../graphql/queries'
import ReviewItem from './ReviewItem'

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepositoryItem = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(REPOSITORY, {
    variables: { id },
  })

  if (loading) {
    return <Text>loading...</Text>
  }
  return (
    <>
      <FlatList
        data={data.repository.reviews.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem item={data.repository} />}
      />
    </>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
  },
})

export default SingleRepositoryItem

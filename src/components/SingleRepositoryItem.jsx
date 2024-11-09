import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { REPOSITORY, REVIEW } from '../graphql/queries'
import ReviewItem from './ReviewItem'

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepositoryItem = () => {
  const { id } = useParams()
  const first = 4
  const { data, loading, fetchMore } = useQuery(REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
        first,
      },
    })
  }

  const onEndReach = () => {
    handleFetchMore()
    console.log('comment fetched')
  }

  if (loading) {
    return <Text>loading...</Text>
  }
  return (
    <>
      <FlatList
        data={data.repository.reviews.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        keyExtractor={({ node }) => node.id}
        ListHeaderComponent={() => <RepositoryItem item={data.repository} />}
        onEndReached={onEndReach}
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

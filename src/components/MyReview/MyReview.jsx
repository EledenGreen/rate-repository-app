import { useQuery } from '@apollo/client'
import { ME } from '../../graphql/queries'
import { FlatList, StyleSheet, View } from 'react-native'
import MyReviewItem from './MyReviewItem'
import { ItemSeparator } from '../RepositoryList'

const MyReview = () => {
  const includeReviews = true
  const { data } = useQuery(ME, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  })

  const reviewNodes = data.me.reviews.edges.map((edge) => edge.node)

  return (
    <>
      <View>
        <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <MyReviewItem review={item} />}
        />
      </View>
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

export default MyReview

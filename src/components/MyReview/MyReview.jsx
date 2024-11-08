import { useQuery } from '@apollo/client'
import { ME } from '../../graphql/queries'
import { FlatList, View } from 'react-native'
import MyReviewItem from './MyReviewItem'

const MyReview = () => {
  const includeReviews = true
  const { data } = useQuery(ME, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  })

  console.log(data.me)
  const reviewNodes = data.me.reviews.edges.map((edge) => edge.node)

  console.log('reviews', reviewNodes)

  return (
    <>
      <View>
        <FlatList
          data={reviewNodes}
          renderItem={({ item }) => <MyReviewItem review={item} />}
        />
      </View>
    </>
  )
}

export default MyReview

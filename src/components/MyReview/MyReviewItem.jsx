import { useMutation } from '@apollo/client'
import theme from '../../theme'
import format from 'date-fns/format'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigate } from 'react-router-native'
import { DELETE_REVIEW } from '../../graphql/mutations'
import { ME } from '../../graphql/queries'

const MyReviewItem = ({ review }) => {
  const includeReviews = true
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      {
        query: ME,
        variables: { includeReviews },
      },
    ],
  })

  const handleDelete = () => {
    const deleteReviewId = review.id
    return Alert.alert('Delete review', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () =>
          deleteReview({
            variables: { deleteReviewId },
          }),
      },
    ])
  }

  const navigate = useNavigate()
  return (
    <>
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{review.rating}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.username}>{review.repository.fullName}</Text>
            <Text style={styles.date}>
              {format(review.createdAt, 'dd.MM.yyyy')}
            </Text>
            <Text style={styles.text}>{review.text}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            mode="contained"
            onPress={() => navigate(`/${review.repositoryId}`)}
          >
            View Repository
          </Button>
          <Button mode="contained" onPress={handleDelete}>
            Delete review
          </Button>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
  },
  rating: {
    height: 50,
    width: 50,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ratingText: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  content: {
    flexDirection: 'column',
    flex: 1,
  },
  username: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  text: {
    color: theme.colors.textPrimary,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
})

export default MyReviewItem

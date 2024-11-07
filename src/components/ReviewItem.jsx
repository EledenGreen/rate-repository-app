import { StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

import format from 'date-fns/format'

const ReviewItem = ({ review }) => {
  console.log(review)
  return (
    <>
      <View style={styles.item}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.username}>{review.user.username}</Text>
          <Text style={styles.date}>
            {format(review.createdAt, 'dd.MM.yyyy')}
          </Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: 'white',
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
})

export default ReviewItem

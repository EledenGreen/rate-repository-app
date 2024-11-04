import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  content: {
    fontSize: 20,
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.content}>
        Fullname: {item.fullName} {'\n'}
        Description: {item.description} {'\n'}
        Language: {item.language} {'\n'}
        ForksCount: {item.forksCount} {'\n'}
        StargazersCount: {item.stargazersCount} {'\n'}
        RatingAverage: {item.ratingAverage} {'\n'}
        ReviewCount: {item.reviewCount} {'\n'}
      </Text>
    </View>
  )
}

export default RepositoryItem

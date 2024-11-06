import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

const RepositoryItem = ({ item }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  return (
    <View style={styles.item} testID="repositoryItem">
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={{
            uri: item.ownerAvatarUrl,
          }}
          testID="icon"
        />
        <View style={styles.content}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>
            {formatCount(item.stargazersCount)}
          </Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{formatCount(item.forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{formatCount(item.reviewCount)}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{item.ratingAverage}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
    marginTop: -20,
  },
  content: {
    flex: 1,
  },
  fullName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  language: {
    color: 'white',
    fontSize: theme.fontSizes.body,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontWeight: theme.fontWeights.bold,
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
  },
})

export default RepositoryItem

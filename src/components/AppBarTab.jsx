import { useApolloClient, useQuery } from '@apollo/client'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link, useNavigate } from 'react-router-native'
import { ME } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'

const AppBarTab = () => {
  const client = useApolloClient()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()

  const { data } = useQuery(ME)
  console.log('me:', data)

  const signout = () => {
    authStorage.removeAccessToken()
    client.resetStore()
    navigate('/signin')
  }

  return (
    <View style={styles.bar}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
        <Link to="/" style={styles.item}>
          <Text>Repositories</Text>
        </Link>
        {data && data.me ? (
          <>
            <Pressable onPress={signout} style={styles.item}>
              <Text>Sign out</Text>
            </Pressable>
            <Pressable style={styles.item}>
              <Text>Create a review</Text>
            </Pressable>
          </>
        ) : (
          <Link to="/signin" style={styles.item}>
            <Text>SignIn</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
})

export default AppBarTab

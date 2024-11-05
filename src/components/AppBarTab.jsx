import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

const AppBarTab = () => {
  return (
    <View style={styles.bar}>
      <Link to="/">
        <Text>Repositories</Text>
      </Link>
      <Link to="/signin" style={styles.item}>
        <Text>SignIn</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  item: {
    paddingHorizontal: 16,
  },
})

export default AppBarTab

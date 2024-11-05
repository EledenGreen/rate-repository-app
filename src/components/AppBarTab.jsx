import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

const AppBarTab = () => {
  return (
    <View style={styles.bar}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
        <Link to="/" style={styles.item}>
          <Text>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.item}>
          <Text>SignIn</Text>
        </Link>
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

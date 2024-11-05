import { View, StyleSheet, Pressable, Text } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 56 + Constants.statusBarHeight,
    backgroundColor: '#6200EE',
  },
  // ...
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab />
    </View>
  )
}

export default AppBar

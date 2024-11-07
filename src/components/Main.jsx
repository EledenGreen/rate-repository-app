import { StyleSheet, View } from 'react-native'
import { Routes, Route, Navigate } from 'react-router-native'

import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme'
import SignIn from './SignIn'
import SingleRepositoryItem from './SingleRepositoryItem'
import CreateReview from './CreateReview'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/:id" element={<SingleRepositoryItem />} />
        <Route path="/createreview" element={<CreateReview />} />
      </Routes>
    </View>
  )
}

export default Main

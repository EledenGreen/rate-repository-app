import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { StatusBar } from 'expo-status-bar'
const App = () => {
  return (
    <>
      <StatusBar style="auto" />

      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  )
}

export default App

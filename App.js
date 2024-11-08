import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import Constants from 'expo-constants'
import { PaperProvider } from 'react-native-paper'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  console.log(Constants.expoConfig.extra)
  return (
    <>
      <StatusBar style="auto" />

      <PaperProvider>
        <NativeRouter>
          <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={authStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
      </PaperProvider>
    </>
  )
}

export default App

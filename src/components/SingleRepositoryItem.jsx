import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { REPOSITORY } from '../graphql/queries'

const SingleRepositoryItem = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(REPOSITORY, {
    variables: { id },
  })

  if (loading) {
    return <Text>loading...</Text>
  }

  return (
    <>
      <RepositoryItem item={data.repository} />
    </>
  )
}

export default SingleRepositoryItem

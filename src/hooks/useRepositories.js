import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = (order) => {
  const { orderBy, orderDirection } = order
  const { data, loading, error } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection },
  })

  const repositories = data ? data.repositories : null

  return { repositories, loading }
}

export default useRepositories

import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = (order, keyword) => {
  const { orderBy, orderDirection } = order
  const searchKeyword = keyword
  console.log(searchKeyword)
  const { data, loading, error } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword },
  })

  const repositories = data ? data.repositories : null

  return { repositories, loading }
}

export default useRepositories

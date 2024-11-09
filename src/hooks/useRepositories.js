import { useQuery } from '@apollo/client'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ order, keyword, first, after }) => {
  const { orderBy, orderDirection } = order
  const searchKeyword = keyword
  console.log(searchKeyword)
  const { data, loading, error, fetchMore } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword, first, after },
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy,
        orderDirection,
        searchKeyword,
        first,
      },
    })
  }

  const repositories = data ? data.repositories : null

  return {
    repositories,
    loading,
    fetchMore: handleFetchMore,
  }
}

export default useRepositories

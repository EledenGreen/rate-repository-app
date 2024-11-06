import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { ALL_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data, loading, error } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  const repositories = data ? data.repositories : null

  return { repositories, loading }
}

export default useRepositories

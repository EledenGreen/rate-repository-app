import { gql } from '@apollo/client'
import { REPOSITORY_DETAILS } from './fragments'

export const ALL_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
`
export const ME = gql`
  query {
    me {
      username
    }
  }
`
export const REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  query ($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

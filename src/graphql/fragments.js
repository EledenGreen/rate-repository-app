import { gql } from '@apollo/client'

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    description
    forksCount
    ownerAvatarUrl
    language
    stargazersCount
    reviewCount
    ratingAverage
    url
  }
`

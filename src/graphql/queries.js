import { gql } from '@apollo/client'

export const ALL_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          description
          forksCount
          ownerAvatarUrl
          language
          stargazersCount
          reviewCount
          ratingAverage
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

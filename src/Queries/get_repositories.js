import gql from "graphql-tag";

export const GET_REPOSITORIES = gql`
  query Reps($quer: String!) {
    search(query: $quer, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            viewerHasStarred
            url
            isPrivate
            isArchived
            owner {
            login
            avatarUrl
          }
          }
        }
      }
    }
  }
`;
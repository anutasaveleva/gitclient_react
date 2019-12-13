import gql from "graphql-tag";

export const GET_REPOSITORY = gql`
  query Repos($name: String!, $login: String!) {
    repository(owner:$login, name: $name) {
            id
            url
            name
            viewerHasStarred
            isPrivate
            isArchived
            primaryLanguage {
                name
            }
            stargazers {
                totalCount
            }
            description
            owner {
                login
                avatarUrl
            }
        }
  }
`;
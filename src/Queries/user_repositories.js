import gql from "graphql-tag";

export const USER_REPOSITORIES = gql`
query Userrepositories($login:String!){
  user(login: $login) {
    id
    isViewer
    viewerIsFollowing
    avatarUrl
    bio
    email
    login
    name
    repositories(first: 10) {
      edges {
        node {
          id
          name
          stargazers {
            totalCount
          }
          viewerHasStarred
          isPrivate
        }
      }
    }
  }
}
`;
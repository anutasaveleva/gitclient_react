import gql from "graphql-tag";

export const MY_REPOSITORIES = gql`
query Myrepositories($first:Int!){
    viewer {
        id
        isViewer
        viewerIsFollowing
        name
        login
        avatarUrl
        bio
        email   
        repositories(first: $first) {
            edges {
                node {
                    id
                    name
                    stargazers{
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

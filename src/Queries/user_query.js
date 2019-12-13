import gql from "graphql-tag";

export const USERQUERY = gql`
query User($login:String!){
    user(login: $login) {
        login
        name
        avatarUrl
        bio
        email  } 
        }
        `;
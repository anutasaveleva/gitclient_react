import gql from "graphql-tag";
import {Mutation} from "@apollo/react-components";
import React from "react";
import Button from "@material-ui/core/Button";

const followUser = gql`
mutation FollowUser($id:ID!){
   followUser(input:{userId:$id}){
        user{
        id
        name
        }
  }
}`;

const FollowUser = ({id}) => (
    <Mutation mutation={followUser} variables={{id}}>
        {followUser => (
            <Button color="error" onClick={followUser}>
                Follow
            </Button>
        )}
    </Mutation>
);

export default FollowUser;
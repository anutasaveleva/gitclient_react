import gql from "graphql-tag";
import {Mutation} from "@apollo/react-components";
import React from "react";
import Button from "@material-ui/core/Button";

const FOLLOWUSER = gql`
mutation($id:ID!){
   followUser(input: {userId:$id} ) {
        user{
            id
            viewerIsFollowing
        }
  }
}`;

const UNFOLLOWUSER = gql`
mutation($id:ID!){
   unfollowUser(input: {userId:$id} ) {
        user{
            id
            viewerIsFollowing
        }
  }
}`;

export const FollowUser = ({id}) => (
    <Mutation mutation={FOLLOWUSER} variables={{id}}>
        {followUser => (
            <Button color="default" onClick={followUser}>
                Follow
            </Button>
        )}
    </Mutation>
);

export const UnfollowUser = ({id}) => (
    <Mutation mutation={UNFOLLOWUSER} variables={{id}}>
        {unfollowUser => (
            <Button color="primary" onClick={unfollowUser}>
                Unfollow
            </Button>
        )}
    </Mutation>
);



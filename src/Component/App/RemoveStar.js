import React from 'react';
import {Mutation} from 'react-apollo'
import gql from "graphql-tag";
import StarIcon from '@material-ui/icons/Star';


const removeStarquery = gql`
mutation RemoveStar($id:ID!){
   removeStar(input:{starrableId:$id}){
    starrable{
      id
      viewerHasStarred
    }
  }
}`

const RemoveStar = ({id}) => (
    <Mutation mutation={removeStarquery} variables={{id}}>
        {removeStar => (
            <StarIcon color="secondary" onClick={removeStar} className="hover">
                removestar
            </StarIcon>
        )}
    </Mutation>
);

export default RemoveStar;
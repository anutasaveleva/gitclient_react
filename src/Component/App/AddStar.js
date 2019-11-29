import gql from "graphql-tag";
import {Mutation} from "@apollo/react-components";
import React from "react";
import StarIcon from '@material-ui/icons/Star';

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const Star = ({id}) => (
    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <StarIcon onClick={starRepository}>
                star
            </StarIcon>
        )}
    </Mutation>
);

export default Star;
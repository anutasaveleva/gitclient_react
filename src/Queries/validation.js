import gql from "graphql-tag";

const VALIDATION_QUERY = gql`
    {
        viewer {
            id
        }
    }
`;

export default VALIDATION_QUERY;
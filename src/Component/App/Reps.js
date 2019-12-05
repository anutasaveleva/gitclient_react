import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Star from "./AddStar";
import RemoveStar from "./RemoveStar";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query Reps($name: String!) {
    organization(login: $name) {
      repositories(first: 10) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
            isArchived
            isPrivate
          }
        }
      }
    }
  }
`;

const Reps = ({name}) => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={{name}}>
        {({data, loading}) =>
            loading ? <div>Loading ...</div> :
                data ? <Repositories repositories={data.organization.repositories}/> :
                <p>Nothing was found</p>
        }
    </Query>
);

export class Repositories extends React.Component {
    state = {
        selectedRepositoryIds: [],
    };

    render() {
        return (
            <RepositoryList
                repositories={this.props.repositories}
                selectedRepositoryIds={this.state.selectedRepositoryIds}
            />
        );
    }
}

const RepositoryList = ({
                            repositories,
                            selectedRepositoryIds,
                        }) => (
    <ul>
        {repositories.edges.map(({node}) => {
            const isSelected = selectedRepositoryIds.includes(node.id);

            const rowClassName = ['row'];

            if (isSelected) {
                rowClassName.push('row_selected');
            }
            return (<div>
                    {node.isPrivate && <LockIcon/> }
                    {!node.isPrivate && <LockOpenIcon/> }
                <a href={'repository/'+node.name}>{node.name}</a>
                    {!node.viewerHasStarred && <Star id={node.id} />}
                    { node.viewerHasStarred && <RemoveStar id={node.id}/>}
                </div>
            );
        })}
    </ul>
);
export default Reps;
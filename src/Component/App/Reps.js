import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';
import Star from "./AddStar";
import RemoveStar from "./RemoveStar";

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query Reps($name: String!) {
    organization(login: $name) {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

const Reps = ({name}) => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={{name}}>
        {({data, loading}) =>
            loading ? <div>Loading ...</div> : <Repositories repositories={data.organization.repositories}/>

        }
    </Query>
);

class Repositories extends React.Component {
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

            return (
                <li className={rowClassName.join(' ')} key={node.id}>

                    <a href={node.url}>{node.name}</a>{' '}
                    {!node.viewerHasStarred && <Star id={node.id} />}
                    { node.viewerHasStarred && <RemoveStar id={node.id}/>}
                </li>
            );
        })}
    </ul>
);
export default Reps;

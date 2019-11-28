import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';

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

    toggleSelectRepository = (id, isSelected) => {
        let {selectedRepositoryIds} = this.state;

        selectedRepositoryIds = isSelected
            ? selectedRepositoryIds.filter(itemId => itemId !== id)
            : selectedRepositoryIds.concat(id);

        this.setState({selectedRepositoryIds});
    };

    render() {
        return (
            <RepositoryList
                repositories={this.props.repositories}
                selectedRepositoryIds={this.state.selectedRepositoryIds}
                toggleSelectRepository={this.toggleSelectRepository}
            />
        );
    }
}

const RepositoryList = ({
                            repositories,
                            selectedRepositoryIds,
                            toggleSelectRepository,
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
                    <Select
                        id={node.id}
                        isSelected={isSelected}
                        toggleSelectRepository={toggleSelectRepository}
                    />{' '}
                    <a href={node.url}>{node.name}</a>{' '}
                    {!node.viewerHasStarred && <Star id={node.id}/>}
                </li>
            );
        })}
    </ul>
);

const Star = ({id}) => (
    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <button type="button" onClick={starRepository}>
                Star
            </button>
        )}
    </Mutation>
);

const Select = ({id, isSelected, toggleSelectRepository}) => (
    <button
        type="button"
        onClick={() => toggleSelectRepository(id, isSelected)}
    >
        {isSelected ? 'Unselect' : 'Select'}
    </button>
);

export default Reps;

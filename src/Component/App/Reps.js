import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Star from "./AddStar";
import RemoveStar from "./RemoveStar";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './App.css';

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query Reps($quer: String!) {
    search(query: $quer, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            viewerHasStarred
            url
            isPrivate
            isArchived
            owner {
            login
            avatarUrl
          }
          }
        }
      }
    }
  }
`;

const Reps = ({quer}) => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={{quer}}>
        {({data, loading}) => {
            return (loading ? <div>Loading ...</div> :
                data ? <p><Repositories repositories={data.search}/></p> :
                    <p>Nothing was found</p>);
        }
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
                login={this.props.login}
                repositories={this.props.repositories}
                selectedRepositoryIds={this.state.selectedRepositoryIds}
            />
        );
    }

}

const RepositoryList = ({
                            login,
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
                login = (typeof node.owner != 'undefined') ? node.owner.login : login;
                return (<div className="RepositoryItem" key={node.id}>
                        {node.isPrivate && <LockIcon/>}
                        {!node.isPrivate && <LockOpenIcon/>}
                        <a href={login + '/repository/' + node.name}>{node.name}</a>
                        {!node.viewerHasStarred && <Star className="hover" id={node.id}/>}
                        {node.viewerHasStarred && <RemoveStar id={node.id}/>}
                    </div>
                );
            }
        )
        }
    </ul>
);
export default Reps;
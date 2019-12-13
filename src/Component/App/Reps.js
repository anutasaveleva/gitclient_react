import React from 'react';
import {Query} from 'react-apollo';
import Star from "./AddStar";
import RemoveStar from "./RemoveStar";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './App.css';
import {Loader} from "./Loader";
import {GET_REPOSITORIES} from "../../Queries/get_repositories";

const Reps = ({quer}) => (
    <Query query={GET_REPOSITORIES} variables={{quer}}>
        {({data, loading}) => {
            return (loading ? <Loader variables={{loading}}/> :
                data ? <div><Repositories repositories={data.search}/></div> :
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
    <div>
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
    </div>
);
export default Reps;
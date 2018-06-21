import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../_components/header';
import Sidebar from '../_components/sidebar';

import { userActions } from '../_actions';

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <Header/>
                <Sidebar/>
            <div className="col-md-6 col-md-offset-3">
                <Link to="/create-user">Create user</Link>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <div className="container">
                        {users.items.map((user, index) =>
                            <div className="row" key={user.id}>
                                <div className="col-md-4">
                                    {user.firstName}
                                </div>
                                <div className="col-md-4">
                                    {user.lastName}
                                </div>
                                <div className="col-md-4">
                                    {
                                        user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                }

            </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedUsersPage = connect(mapStateToProps)(UsersPage);
export { connectedUsersPage as UsersPage };
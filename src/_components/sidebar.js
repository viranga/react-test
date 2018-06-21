import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidenav">
                {localStorage.getItem('user')?
                        <Link to="/login">Logout</Link>
                   :''}
            </div>
        );
    }
}
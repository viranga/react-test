import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        if(localStorage.getItem('user')){
            var menuHtml = <ul><li><Link to="/users">Users</Link></li>
                            <li><Link to="/login">Logout</Link></li></ul>;
        }

        return (
            <div className="sidenav">
                {menuHtml}
            </div>
        );
    }
}
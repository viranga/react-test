import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        console.log(localStorage.getItem('user'))
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">KeenEye</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {localStorage.getItem('user')?
                            <li className="dropdown">
                                <Link to="/login">Logout</Link>
                            </li>:''}

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
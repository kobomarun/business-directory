import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return(
        <div className="row">
            <div className="nav flex-column nav-pills">
                <Link className="nav-link " to="/admin">Dashboard</Link>
                <Link className="nav-link" to="/add-directory">Create Directory</Link>
                <Link className="nav-link" to="/">View All Directories</Link>
                <Link className="nav-link" to="/logout">Logout</Link>
            </div>
        </div>
    );
}

export default Nav;
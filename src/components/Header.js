import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';



const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
            <Link className="navbar-brand" to="/">Directory</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span>
                    </Link>
                </li>
            
                { Cookies.get('islogin') === 'authenticated' ?
                <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin </Link> 
            </li>: 
            <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link> 
            </li>
             
            }
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'


import Nav from './Nav';

class Dashboard extends Component {
    componentDidMount() {
        if(Cookies.get('islogin') !== 'authenticated')
        this.props.history.push('/login')
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h3>Menu</h3>
                            <Nav />
                        </div>
                    <div className="col-md-10">
                        <h2>Main</h2>
                        <div className="card">
                        <h5 className="card-header">Welcome Admin</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/add-directory" className="btn btn-primary">Get Started</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
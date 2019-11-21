import React, { Component } from 'react';
import Cookies from 'js-cookie';
import  { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from './forms/LoginForm'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            userdetails: {
                email: 'admin@email.com',
                password: '@Password123'
            },
            isError: false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password, userdetails } = this.state;
        if(email == '' || password == '') {
            this.setState({
                isError: true
            })
        }
        else if(userdetails.email == email && userdetails.password == password) {
            alert('Login Successful')
            Cookies.set('islogin', 'authenticated', { expires: 1 })
            this.props.history.push("/admin")
        } else {
            alert('invalid credentials')
        }
        
    }


    render() {
        const { isError } = this.state;
        return(
            <div className="container">
                <div className="row">
                    { isError ? 
                    <div className="alert alert-danger">
                        {`email or password field cannot be empty`}
                    </div> : ''
                    }
                    <LoginForm 
                        handleSubmit={this.handleSubmit} 
                        handleChange={this.handleChange} 
                    />
                </div>
            </div>
        );
    }
}

export const Logout = () => {
    Cookies.remove('islogin')
    return <Redirect to='/login'  />
}

Login.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func
}

export default Login;
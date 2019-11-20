import React, { Component } from 'react';
import LoginForm from './forms/LoginForm'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            userdetails: {
                email: 'admin',
                password: 123456
            }

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
        if(userdetails.email == email && userdetails.password == password) {
            alert('Login Successful')
            this.props.history.push("/admin")
        } else {
            alert('invalid credentials')
        }
        
    }


    render() {
        console.log(this.state.userdetails.email)
        return(
            <div class="container">
                <div class="row">
                    <LoginForm 
                        handleSubmit={this.handleSubmit} 
                        handleChange={this.handleChange} 
                    />
                </div>
            </div>
        );
    }
}

export default Login;
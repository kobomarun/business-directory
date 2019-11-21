import React, { Component } from 'react';
import Store from 'store';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import BusinessDirectoryForm from './forms/BusinessDirectoryForm';
import Nav from './Nav';


class CreateDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            phone: '',
            email: '',
            software: '',
            transportation: '',
            technology: '',
            url: '',
            isSubmitted: false,
            directory: Store.get('mee'),

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        if(Cookies.get('islogin') !== 'authenticated')
        this.props.history.push('/login')
    }
    

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        let randNum = Math.floor(Math.random() * 200 );
        e.preventDefault();
        const { 
            description, 
            email, 
            name, 
            phone, 
            software, 
            technology, 
            transportation, 
            url 
            } = this.state;
            
             Store.set(randNum, {
                 id:randNum,
                description, 
                email, 
                name, 
                phone, 
                software, 
                technology, 
                transportation, 
                url 
            });
                
                
                
        this.setState({
            isSubmitted:true
        })
        alert('Business Directory Created!')

        setTimeout(() => {
            this.props.history.push('/')
        }, 1000)
        
    }

    render() {
        
        const { isSubmitted } = this.state;
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-2">
                <h3>Menu</h3>
                    <Nav/>
                </div>
                <div className="col-md-10">
                <h2 className="text-center">Create Business Directory</h2>       
                    { isSubmitted ? 
                    <div className="alert alert-success text-center">
                        Business DIrectory Successfully Created. Add a new one
                    </div>: ''
                    }
                    <BusinessDirectoryForm
                      handleSubmit={this.handleSubmit} 
                      handleChange={this.handleChange}
                    />
                </div>
                </div>
            </div>
        );
    }
}

CreateDirectory.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func
}

export default CreateDirectory;
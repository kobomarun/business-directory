import React, { Component } from 'react';
import Store from 'store';

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
            directory: Store.get('mee')
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
        let randNum = Math.floor(Math.random() * 20 );
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
                description, 
                email, 
                name, 
                phone, 
                software, 
                technology, 
                transportation, 
                url });
                
                
                
                this.setState({
                    isSubmitted:true
                })
                // setTimeout(() => {
                //     this.props.history.push('/add-directory')
                // }, 2000)
    }

    render() {
        
        const { isSubmitted } = this.state;
        // console.log(this.state.directory)
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-2">
                <h3>Menu</h3>
                    <Nav/>
                </div>
                <div className="col-md-10">
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

export default CreateDirectory;
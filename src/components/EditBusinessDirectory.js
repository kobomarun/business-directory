import React, { Component } from 'react';
import BusinessDirectoryForm from './forms/BusinessDirectoryForm';

class EditBusinessDirectory extends Component {
    render() {
        return(
            <div className="container">
                 <h2 className="text-center">Edit Business Directory</h2>       

                 <BusinessDirectoryForm />

            </div>
        );
    }
}

export default EditBusinessDirectory;
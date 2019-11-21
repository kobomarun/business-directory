import React from 'react';


const SearchForm = (props) => {
    return(
        <div className="form-row">
            <div className="col-md-12">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Type to search..." 
                autoComplete="off"
                onChange={props.handleChange}
                value={props.handleType}
                />
            </div>
    </div>
    );
}

export default SearchForm;
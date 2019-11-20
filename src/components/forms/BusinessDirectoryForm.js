import React from 'react';
import  '../../Styles.css';


const BusinessDirectoryForm = (props) => {
    const {handleChange, handleSubmit } = props;
    return(
        <div className="business-form">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">Create Business Directory</h2>       
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Business Name" 
                        required="required" 
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control" 
                        placeholder="Business Description" 
                        required="required" 
                        name="description"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Business Phone Number" 
                        required="required" 
                        name="phone"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Business Email" 
                        required="required" 
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Software Development</label>
                    <input 
                        type="checkbox" 
                        className="form-control" 
                        placeholder="Email" 
                        required="required" 
                        name="software"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Transportation</label>
                    <input 
                        type="checkbox" 
                        className="form-control" 
                        placeholder="Email" 
                        name="transportation"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Technology</label>
                    <input 
                        type="checkbox" 
                        className="form-control" 
                        placeholder="Email" 
                        name="technology"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="url" 
                        className="form-control" 
                        placeholder="Business Website URL" 
                        name="url"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Create Directory</button>
                </div>  
            </form>
            
        </div>
    )
}

export default BusinessDirectoryForm;
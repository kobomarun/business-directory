import React from 'react';

import  '../../Styles.css';


const LoginForm = (props) => {
    const {handleChange, handleSubmit } = props;
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        required="required" 
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        required="required" 
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>  
            </form>
            
        </div>
    )
}



export default LoginForm;
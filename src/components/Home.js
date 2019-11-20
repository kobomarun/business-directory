import React  from 'react';
import store from 'store';



class Home extends React.Component {
    state = {
        store: {}
    }

    componentDidMount() {
        this.fetchDirectories()
    }

    fetchDirectories = (item) => {
         item = []
        store.each(directory => {
           
            item.push(Object.assign({},directory))
          
            
        })
            return item;

       
    }
   
    render() {
        let obj = this.fetchDirectories()
        
      
        return(
            <div className="container">
                <div className="row">
                    <h1>Home</h1>
                    
                            <table className="table">
                                <thead>
                                   <tr>
                                       <th>Business Name</th>
                                       <th>Description</th>
                                       <th>Email</th>
                                       <th>Phone</th>
                                       <th>Website URL</th>
                                   </tr>
                                 </thead>
                                   <tbody>
                                   { obj.map(row => {
                                       return (
                                       <tr>
                                           <td>{row.name}</td>
                                           <td>{row.description}</td>
                                           <td>{row.email}</td>
                                           <td>{row.phone}</td>
                                           <td>{row.url}</td>
                                       </tr>
                                       
                                    
                                       );
                                    })
                                    }
                                    </tbody>
                                    </table>
                                    
            
                                   
                                        
                                    
                                   
                          
                       
                    
                    
                </div>
            </div>
        );
    }
}

export default Home;
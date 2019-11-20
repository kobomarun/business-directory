import React  from 'react';
import store from 'store';
import { Link } from 'react-router-dom'



class Home extends React.Component {
    state = {
        directory: []
    }

    componentDidMount() {
        //store.clearAll();
        this.fetchDirectories()
    }

    fetchDirectories = (item) => {
        item = []
        store.each(directory => { 
            item.push(Object.assign({},directory))
        })

        this.setState({
            directory: item
        })

           return item;

       
    }

    deleteDirectory(id) {
        let item = []
        store.each(directory => { 
            item.push(Object.assign({},directory))
        })
     
        let newDirectory = item.filter(item => {
           if(item.id != id) {
                store.remove(id)
                return item
            }
        })
        console.log(newDirectory)
        this.setState({
            directory: newDirectory
        })
    }
   
    render() {
        const { directory } = this.state
        
      
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
                                       <th></th>
                                   </tr>
                                 </thead>
                                   <tbody>
                                   { directory.map(row => {
                                       return (
                                       <tr>
                                           <td>{row.name}</td>
                                           <td>{row.description}</td>
                                           <td>{row.email}</td>
                                           <td>{row.phone}</td>
                                           <td>{row.url}</td>
                                           <td><button onClick={() => this.deleteDirectory(row.id)} className="btn btn-danger">Delete</button></td>
                                           {/* <td><Link ={`edit/${row.id}`}>Edit</Link> | <Link to={`delete/${row.id}`}>Delete</Link> </td> */}
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
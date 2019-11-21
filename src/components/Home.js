import React, { Component }  from 'react';
import store from 'store';
import { Link } from 'react-router-dom';
import SearchForm from './forms/SearchForm';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            directory: [],
            search: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
   

    componentDidMount() {
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

     handleChange(e)  {
        const {  value } = e.target;
        this.setState({
            search: value
        })
        console.log(e.target.value)
     }

    deleteDirectory(id) {
        let item = []
        store.each(directory => { 
            item.push(Object.assign({}, directory))
        })
     
        let newDirectory = item.filter(item => {
           if(item.id != id) {
                store.remove(id)
                return item
            }
        })
        this.setState({
            directory: newDirectory
        })
    }
   
    render() {
        let { directory, search } = this.state
       
        let searchTerm = this.state.search.trim().toLowerCase();

        if(searchTerm.length > 0){

        directory = directory.filter((item) => {
            let allSearch = item.name.toLowerCase().match( search ) || item.description.toLowerCase().match( search );
            if(allSearch == ' ') {
                return <p>No Business found</p>
            } else {
            return allSearch;
            }
        });
        }

        return(
            <div className="container">
                <div className="row">
                    <h1>Home</h1>
                    <div className="col-md-12">
                    <SearchForm 
                        handleChange={this.handleChange}
                        handleType={this.state.search}
                    />
                    </div>

                        <table className="table table-bordered">
                            <thead className="thead-dark">
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
                                { directory !=  '' ?
                                directory.map(row => {
                                    return (
                                    <tr key={row.id}>
                                        <td>{row.name}</td>
                                        <td>{row.description}</td>
                                        <td>{row.email}</td>
                                        <td>{row.phone}</td>
                                        <td>{row.url}</td>
                                        <td><button onClick={() => this.deleteDirectory(row.id)} className="btn btn-danger">Delete</button></td>
                                        <td><Link to={`edit/${row.id}`}>Edit</Link>  </td>
                                    </tr>
                                    
                                
                                    );
                                }) : 'Business directory cannot be found'
                                }
                                </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

export default Home;
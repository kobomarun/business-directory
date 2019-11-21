import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login, { Logout } from './components/Login';
import Nav from './components/Nav';
import CreateDirectory from './components/CreateDirectory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeader: false
    }
  }
  render() {
    return(
      <BrowserRouter>
        <React.Fragment>
          <Header />
          { this.state.isHeader ? 
          <Nav /> :''
          }
          <Switch>
            <Route exact component={Home} path="/"/>
            <Route component={Dashboard} path="/admin" />
            <Route component={Login} path="/login" />
            <Route component={Logout} path="/logout" />
            <Route component={CreateDirectory} path="/add-directory" />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
      
    )
  }
}

export default App;

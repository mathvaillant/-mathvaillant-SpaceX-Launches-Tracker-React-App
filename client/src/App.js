import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './spacex.jpg';
import Launches from './components/Launches';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img 
              src={logo} 
              alt="SpaceX"
              style={{ width: 500, display: 'block', margin: 'auto' }}
            />
            <Route exact path='/' component={Launches} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

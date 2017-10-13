import React from 'react';
import {PropTypes} from 'prop-types';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StarWarsHomePage from './Components/StarWarsHomePage/index'

export default class App extends React.Component {
  PropTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="App">
       <Router>
         <Route path="/" component = {StarWarsHomePage}/>
         </Router>       
      </div>
    );
  }
}


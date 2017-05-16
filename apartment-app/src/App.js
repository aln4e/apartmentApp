import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ApartmentIndex from './ApartmentIndex'
import ApartmentDetail from './ApartmentDetail'
import Header from './Header'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header name='Apartment Hunter!' />
            <Route exact path="/" component={ApartmentIndex} />
            <Route path='/apartments/:id' component={ApartmentDetail} />
          <div>
            <Footer name='Apartment Hunting!'/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OAuth from './Components/vista';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={OAuth} />
        {/* <Route path="/imagesrandom" exact component={} /> */}
      </Router>
    );
  }
}

export default App;
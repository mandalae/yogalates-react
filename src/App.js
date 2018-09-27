import React, { Component } from 'react';
import './App.css';
import Fetch from 'react-fetch';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuComponent from './components/MenuComponent';
import ContentComponent from './components/ContentComponent';
import HomeComponent from './components/HomeComponent';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <header className="App-header">
        <Fetch url="https://94omh50edg.execute-api.eu-central-1.amazonaws.com/yogalates?page=menu">
          <MenuComponent/>
        </Fetch>
        </header>
        <section className="App-intro">
            <Route exact path="/" component={HomeComponent} />
            <Route path="/:contentId" component={ContentComponent} />
        </section>
      </div>
      </Router>
    );
  }
}

export default App;

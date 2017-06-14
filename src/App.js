import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import AuxiliaryArticles from './AuxiliaryArticles'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Ad />
          <AuxiliaryArticles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

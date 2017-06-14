import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header'
import Article from '../Article/Article'
import Ad from '../Ad/Ad'
import AuxiliaryArticles from '../AuxiliaryArticles/AuxiliaryArticles'
import Footer from '../Footer/Footer'

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

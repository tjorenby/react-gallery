import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'



class App extends Component {

  

  

  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList/>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import ImageForm from '../ImageForm/ImageForm'

class App extends Component {

  addItem = (newItem) => {
    console.log('in addItem:', newItem);
    axios({
      method: 'POST',
      url: '/gallery',
      data: newItem
    }).then(response => {
      console.log('back from POST with:', response);
    }).catch(err =>{
      console.log('error with POST', err);
    });
  }

  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <ImageForm addItem={this.addItem}/>
        <GalleryList/>
      </div>
    );
  }
}

export default App;

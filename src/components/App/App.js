import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';


class App extends Component {

  state = {
    images: []
  }

  componentDidMount = () => {
    console.log('componentDidMount is ready');
    this.getImages();
  }

  getImages = () => {
    axios({
      method: 'GET',
      url: '/images'
    }).then(response => {
      console.log('back from GET with:', response);
      console.log('response.data is:', response.data);
      this.setState({
        images: response.data
      });
    }).catch(err =>{
      console.log('GET error!', err);
    });

  }
  render() {
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

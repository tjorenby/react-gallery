import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'



class App extends Component {

  state = {
    images: []
  }

  componentDidMount = () => {
    console.log('componentDidMount is ready');
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('back from GET with:', response);
      console.log('response.data is:', response.data);
      this.setState({
        images: response.data
      });
    }).catch(err =>{
      console.log('GET error!', err);
    });

  };
  
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

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import ImageForm from '../ImageForm/ImageForm'

class App extends Component {

  state = {
    items: [],
  }

  addItem = (newItem) => {
    console.log('in addItem:', newItem);
    axios({
      method: 'POST',
      url: '/gallery',
      data: newItem
    }).then(response => {
      console.log('back from POST with:', response);
      this.setState({
        items:[
          ...this.state.items,
          newItem
        ]
      });
      this.getGallery();
    }).catch(err =>{
      console.log('error with POST', err);
    });
  }

  ///////
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
        items: response.data
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
        <ImageForm addItem={this.addItem}/>
        <GalleryList 
          getGallery={this.getGallery}
          items={this.state.items}
          />
      </div>
    );
  }
}

export default App;

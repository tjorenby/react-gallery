import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import ImageForm from '../ImageForm/ImageForm'
import 'fontsource-roboto';

class App extends Component {

  state = {
    items: [],
  }

  //Needed for Axios calls. 
  componentDidMount = () => {
    console.log('componentDidMount is ready');
    this.getGallery();
  }

   // GET route for grabbing items from the db and rendering them to the DOM. 
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

  // POSTs a new item to the db and adds it to the items array. Re-renders gallery to display all items in db. 
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
      this.getGallery(); // Re-renders the gallery. 
    }).catch(err =>{
      console.log('error with POST', err);
    });
  }

  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <ImageForm addItem={this.addItem}/> 
        
        <GalleryList 
          getGallery={this.getGallery}
          items={this.state.items}
        /> 
      </div> // Pulling in GalleryList and ImageForm components. Sending them the necessary props. 
    );
  }
}

export default App;

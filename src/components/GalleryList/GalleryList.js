import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

class GalleryList extends Component {

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
    return (
      <div>
        <h1>Gallery List</h1>
        <ul>
          {this.state.images.map(image =>
            
            <GalleryItem
              key={image.id}
              image={image}
            />
             
            )}
        
        </ul>
      </div>
    );
  }
}

export default GalleryList;
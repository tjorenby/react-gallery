import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

class GalleryList extends Component {

  state = {
    images: [],
    loveCount: ''
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

  updateLoveCount = (loveCount, id) => {
    console.log('in updateLoveCount');
    console.log('newLoveCount is:', loveCount);
    let imageId = id;
    this.setState({
      loveCount: loveCount
    });

    axios({
      method: 'PUT',
      url: `/gallery/${imageId}`,
      data: loveCount
    }).then(response =>{
      console.log('back from PUT with:', response);
      this.getGallery();
    }).catch(err =>{
      console.log('error with PUT', err);
    });

  }

  render() {
    return (
      <div>
        <h1>Gallery List</h1>
          {this.state.images.map(image =>
            
            <GalleryItem
              key={image.id}
              image={image}
              updateLoveCount={this.updateLoveCount}
              loveCount={this.state.loveCount}
            />
             
            )}
      </div>
    );
  }
}

export default GalleryList;
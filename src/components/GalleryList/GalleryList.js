import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

class GalleryList extends Component {

  state = {
    images: [],
    newLoveCount: ''
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
    console.log('loveCount is:', loveCount);
    let newLoveCount = Number(loveCount) +1;
    console.log('newLoveCount is:', newLoveCount);
    let imageId = id;
    this.setState({
      newLoveCount: newLoveCount
    });

    axios({
      method: 'PUT',
      url: `/gallery/${imageId}`,
      data: newLoveCount
    }).then(response =>{
      console.log('back from PUT with:', response);
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
              updateLoveCount ={this.updateLoveCount}
            />
             
            )}
      </div>
    );
  }
}

export default GalleryList;
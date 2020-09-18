import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  render() {
    return (
      <div>
        <h1>Gallery List</h1>
        <GalleryItem/>
      </div>
    );
  }
}

export default GalleryList;
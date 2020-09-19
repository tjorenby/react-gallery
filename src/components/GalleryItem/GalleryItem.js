import React, { Component } from 'react';


class GalleryItem extends Component {

  

  render() {
    return (
      <div>

          <img src ={`${this.props.image.path}`} width="100px" height="100px"/>
          <p>{this.props.image.description}</p>


      
          
      </div>
    );
  }
}

export default GalleryItem;
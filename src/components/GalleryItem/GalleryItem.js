import React, { Component } from 'react';
import './GalleryItem.css';
import { Button } from '@material-ui/core';


class GalleryItem extends Component {

  render() {
    return (
      <>    
        <div className="container">
          <div className="image-container">
            <img 
            src = {this.props.item.path}
            alt={`${this.props.item.title}`}
            className="image"
            />
            
            <div className="overlay">
              <div className="text">
                {this.props.item.description}
              </div>
            </div>
          </div>{/* This section displays the image and allows for the image description to be displayed on hover. Hover function and styling done in css file */}
            
          <p>Love Count: {this.props.item.loveCount}</p>

          <div>
            <Button color="primary" onClick={() =>{this.props.updateLoveCount(this.props.item.loveCount, this.props.item.id)}}>Love It!</Button>

            <Button color="secondary" onClick={() => {this.props.deleteItem(this.props.item.id)}}>Delete This!</Button>
          </div> {/* Minimal styling done using Material UI */}
        </div>
      </>
    ); 
  }
}

export default GalleryItem;
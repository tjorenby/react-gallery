//import axios from 'axios';
import React, { Component } from 'react';
import './GalleryItem.css';



class GalleryItem extends Component {
  
  state = {
    newLoveCount: '',
    isHovered: false,
    MouseOver: true,
    render: ''

  }

  render() {
    return (
      <>
              
                <div className="container">
                  <img 
                  src = {this.props.item.path}
                  alt={`${this.props.item.title}`}
                  className="image"
                  />
                 
                  <div class="overlay">
                    <div class="text">{this.props.item.description}</div>
                  </div>
                  
                
                <p>Love Count: {this.props.item.loveCount}</p>
                
                <button onClick={() =>{this.props.updateLoveCount(this.props.item.loveCount, this.props.item.id)}}>Love It!</button>
               </div>
        
      </>
); 
  }
}

export default GalleryItem;
import React, { Component } from 'react';
import './GalleryItem.css';



class GalleryItem extends Component {
  
  render() {
    return (
      <>
              
        <div className="container">
          
            <img 
            src = {this.props.item.path}
            alt={`${this.props.item.title}`}
            className="image"
            />
            
            <div className="overlay">
              <div className="text">{this.props.item.description}</div>
            </div>
            
          <p>Love Count: {this.props.item.loveCount}</p>

          <div>
            <button onClick={() =>{this.props.updateLoveCount(this.props.item.loveCount, this.props.item.id)}}>Love It!</button>
            <button onClick={() => {this.props.deleteItem(this.props.item.id)}}>Delete This!</button>
          </div>
        </div>

      </>
); 
  }
}

export default GalleryItem;
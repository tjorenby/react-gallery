import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';
import './GalleryList.css';

class GalleryList extends Component {

  state = {
    loveCount: ''
  }
  
  

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
      this.props.getGallery();
    }).catch(err =>{
      console.log('error with PUT', err);
    });

  }

  

  render() {
    return (
      <div ClassName="Gallery">
        <h1>Gallery List</h1>
          <div className="Gallery-list">
                  {this.props.items.map(item =>

                    <GalleryItem
                      key={item.id}
                      item={item}
                      image={item.path}
                      updateLoveCount={this.updateLoveCount}
                      loveCount={this.state.loveCount}
                    /> 
                  
               )};
          </div>    
      </div>
    );
  }
}

export default GalleryList;
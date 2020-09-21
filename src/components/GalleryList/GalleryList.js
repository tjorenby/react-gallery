import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';
import './GalleryList.css';
import 'fontsource-roboto';

class GalleryList extends Component {

  state = {
    loveCount: ''
  }
  
  // Updates loveCount and sends that data to the db. The Gallery is then re-rendered, displaying the updated loveCount
  updateLoveCount = (loveCount, id) => {
    console.log('in updateLoveCount');
    console.log('newLoveCount is:', loveCount);
    let itemId = id;
    this.setState({
      loveCount: loveCount
    });

    axios({
      method: 'PUT',
      url: `/gallery/${itemId}`,
      data: loveCount
    }).then(response =>{
      console.log('back from PUT with:', response);
      this.props.getGallery(); // re-renders gallery
    }).catch(err =>{
      console.log('error with PUT', err);
    });
  }

  // Deletes items from db by accessing their unique id. Re-renders gallery. 
  deleteItem = (itemId) => {
    console.log('in deleteItem');
    axios({
      method:'DELETE',
      url:`/gallery/${itemId}`
    }).then(response =>{
      console.log('Deleted', itemId);
      this.props.getGallery(); // re-renders the gallery
    }).catch(err => {
      console.log('DELETE error', err);
    })
  }

  render() {
    return (
      <div ClassName="Gallery">
        <h1>Images</h1>
          <div className="Gallery-list">
                  {this.props.items.map(item =>

                    <GalleryItem
                      key={item.id}
                      item={item}
                      image={item.path}
                      updateLoveCount={this.updateLoveCount} 
                      loveCount={this.state.loveCount}
                      deleteItem={this.deleteItem}
                    />  // using .map() to loop through the items array (in App.js) Sending the above props to GalleryItem to be used for functionality
               )}
          </div>    
      </div>
    );
  }
}

export default GalleryList;
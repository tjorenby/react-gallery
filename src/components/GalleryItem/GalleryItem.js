//import axios from 'axios';
import React, { Component } from 'react';


class GalleryItem extends Component {
  
  state = {
    newLoveCount: ''

  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <img src ={`${this.props.image.path}`} width="200px" height="200px" alt={`${this.props.image.title}`}/>
              </td>
              <td>
              <button onClick={() =>{this.props.updateLoveCount(this.props.image.loveCount, this.props.image.id)}}>Love It!</button>
              </td>
              <td>
              <p>Love Count: {this.props.image.loveCount}</p>
              </td>
            </tr>
          </tbody>
        </table>
      
          
      </div>
    );
  }
}

export default GalleryItem;
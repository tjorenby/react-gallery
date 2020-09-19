import React, { Component } from 'react';


class GalleryItem extends Component {

  

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <img src ={`${this.props.image.path}`} width="200px" height="200px" alt={`${this.props.image.title}`}/>
            </td>
            <td>
            <button>Love It!</button>
            </td>
            <td>
            <p>Love Count: {this.props.image.loveCount}</p>
            </td>
          </tr>
        </table>
      
          
      </div>
    );
  }
}

export default GalleryItem;
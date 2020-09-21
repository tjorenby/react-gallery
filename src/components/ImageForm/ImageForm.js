import React, { Component } from 'react';
import './ImageForm.css';

class ImageForm extends Component {

    state = {
            newTitle: '',
            newDescription: '',
            newPath: ''

        }

    handleChange = (event) => {
        console.log('in handleChange', event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newItem = this.state;
        this.props.addItem(newItem);
        this.clearInputFields();
    }

    clearInputFields = () => {
        this.setState({
                newTitle: '',
                newDescription: '',
                newPath: ''
        });
    }



    render(){
        console.log('submitting:', this.state.newTitle, ':',this.state.newDescription, ':', this.state.newPath);
        return(
            <>
            <h3>Add Image</h3>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newTitle}
                    name="newTitle"
                    placeholder="Image Title"
                />
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newDescription}
                    name="newDescription"
                    placeholder="Image Description"
                />
                 <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newPath}
                    name="newPath"
                    placeholder="Image URL"
                />
                <input type="submit" value="submit"/>

            


            </form>
            </>
        );
    }
}

export default ImageForm;
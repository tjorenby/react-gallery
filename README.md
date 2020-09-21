# react-gallery

## Description

_Duration:_Weekend Project

This is a basic image gallery where users can add images, "love" them, or "delete" them. The app keeps count of the amount of times an image is "loved", and hovering over an image displays a description.

In building this app, I practiced skills for full stack integration, connecting a React-powered front-end through a node server to a SQL database. Minimal styling was done using Material UI.

## Prerequisites 

To run this app, you will need:
    -Node.js
    -Postgres
    
## Install

To run this application:

    - Create a database in Postgres called `react-gallery`
    - Execute the SQL commands from `database.sql`
    - Run `npm install` from the project root directory
    - Run `npm run server` to run the node server
    - Run `npm run client` to launch the React app. 
    

## Usage

Add a title, description, and URL of your favorite image and click 'Submit'
Hover over the images in your gallery to review their descriptions. 
Press "Love It!" to show your appreciation. 
Press "Delete This!" to remove the image from your gallery.

## Demo

![demo](./media/demo.gif)
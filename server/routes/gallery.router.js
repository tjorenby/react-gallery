const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET route
router.get('/', (req,res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY title, description, path DESC;`;
    pool.query(sqlText)
        .then(result => {
            console.log('Got stuff back from Database', result);
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`Error making Database query: ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;

























// const galleryItems = require('../modules/gallery.data');

// // DO NOT MODIFY THIS FILE FOR BASE MODE

// // // PUT Route
// // router.put('/like/:id', (req, res) => {
// //     console.log(req.params);
// //     const galleryId = req.params.id;
// //     for(const galleryItem of galleryItems) {
// //         if(galleryItem.id == galleryId) {
// //             galleryItem.likes += 1;
// //         }
// //     }
// //     res.sendStatus(200);
// // }); // END PUT Route

// // // GET Route
// // router.get('/', (req, res) => {
// //     res.send(galleryItems);
// // }); // END GET Route

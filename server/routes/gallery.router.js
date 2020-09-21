const express = require('express');
const { prependOnceListener } = require('../modules/pool.js');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET route for getGallery
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

// PUT route for updateLoveCount
router.put('/:id', (req,res) => {
    let imageId = req.params.id;
    const sqlText = `UPDATE "gallery" SET "loveCount" = "loveCount" + 1 WHERE "id" = $1;`;

    pool.query(sqlText, [imageId])
        .then(response => {
            console.log('updated loveCount:', imageId, response);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(`Error making db query: ${sqlText}`, err);
            res.sendStatus(500);
        })
})

// POST route for addItem
router.post('/', (req,res) => {
    const newItem = req.body
    const sqlText = `INSERT INTO "gallery" ("title", "description", "path", "loveCount")
    VALUES ($1, $2, $3, $4);`;
    
    pool.query(sqlText, [newItem.newTitle, newItem.newDescription, newItem.newPath, newItem.newLoveCount])
        .then(result => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
})

// DELETE route for deleteItem
router.delete('/:id', (req,res) =>{
    let reqId = req.params.id;
    console.log('DELETE request for id:', reqId);
    const sqlText = `DELETE FROM "gallery" WHERE "id" = $1;`;

    pool.query(sqlText, [reqId])
        .then(result => {
            console.log('Item Deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
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

const express = require('express');
const path = require('path');

//express.Router is a mini express
const router = express.Router();

// __dirname is absolute path to this file
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html')); // backward slash in linux, forward slash in windows
});


module.exports = router;
const express = require('express');

//express.Router is a mini express
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});


module.exports = router;
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

//express.Router is a mini express
const router = express.Router();



router.get('/', (req, res, next) => {
    const products = adminData.products;
    //res.sendFile(path.join(rootDir, 'views', 'shop.html')); // backward slash in linux, forward slash in windows
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});


module.exports = router;
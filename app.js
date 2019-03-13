const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Hello 1');
    next();
});

app.use((req, res, next) => {
    console.log('Hello 2');
    res.send();
});

app.listen(3000);
const express = require('express');
const keySender = require('node-key-sender');
const robot = require('robotjs');

const app = express();

app.get('/key/:key', (req, res, next) => {
    keySender.sendKey('@142', 2000);
    keySender.s
    next();
});

app.listen(8080, () => {
    console.log('Server started!');
});
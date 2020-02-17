const express = require('express');
const keySender = require('robotjs');

const app = express();

app.get('/key/:key', (req, res, next) => {
    robot.keyTap(req.params.key);
    next();
});

app.listen(8080, () => {
    console.log('Server started!');
});
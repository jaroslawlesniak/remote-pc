const express = require('express');
const keySender = require('robotjs');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    next();
});

app.get('/key/:key', (req, res, next) => {
    keySender.keyTap(req.params.key);
    res.send({"status:": 200});
});

app.listen(8080, () => {
    console.log('Server started!');
});
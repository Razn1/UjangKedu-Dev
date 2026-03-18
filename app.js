const express = require('express');
const router = require('./routes/api');


const app = express();

//Move API routes to API.js

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
    console.log('http://localhost:3000/');
});

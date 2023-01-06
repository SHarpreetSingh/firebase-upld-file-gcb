'use strict';
const express = require('express');
const cors = require('cors');
const imageRoute = require('./route');
// import our current configuration
// set up our app using express
const app = express();
// express setup
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// routes (for uploading images to storage)
app.use('/api', imageRoute.routes)
app.listen(3000, () => {
console.log ("app is listening on port:", 3000);
})
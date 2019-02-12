const express = require('express');
const cors = require('cors');
//const request = require('request');
const config = require('./config');

//const categories = require('./category/categories');
const items = require('./routes');

const app = express();
app.use(cors());

app.listen(config.port, function() {
  console.log(`listening on port ${config.port}`);
});

// Application routes.
app.use('/api/items', items);
// app.use('/api/categories', categories);

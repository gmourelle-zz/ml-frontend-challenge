const express = require('express');
const cors = require('cors');
const config = require('./config');

const items = require('./routes');

const app = express();
app.use(cors());

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});

// Application routes.
app.use('/api/items', items);

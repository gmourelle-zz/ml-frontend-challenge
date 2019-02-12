const express = require('express');
const request = require('request');
const itemDetails = require('../controllers/itemDetails');
const items = require('../controllers/items');

const router = express.Router();

// Routes handling.
router.get('/', items);
router.get('/:id', itemDetails);

module.exports = router;

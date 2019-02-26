const express = require("express");
const getItemDetailsFromAPI = require("../base/itemDetails");
const getItemsFromAPI = require("../base/items");

const router = express.Router();

router.get("/", getItemsFromAPI);
router.get("/:id", getItemDetailsFromAPI);

module.exports = router;

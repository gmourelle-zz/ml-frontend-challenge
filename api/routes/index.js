const express = require("express");
const getItemDetails = require("../controllers/itemDetailsController");
const getItems = require("../controllers/itemsController");

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemDetails);

module.exports = router;

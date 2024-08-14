/**
 *Search Results for videos API routing
 */

const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.get("/title/:videoTitle", searchController.getVideosBySearch);

module.exports = router;

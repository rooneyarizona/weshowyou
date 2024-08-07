const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/title/:videoTitle', searchController.getVideosBySearch);
// router.get('/genres/:videoGenre', searchController.getVideosByGenre);

module.exports = router;

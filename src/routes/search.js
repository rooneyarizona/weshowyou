const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/videos/search/:videoTitle', searchController.getVideosBySearch);

module.exports = router;

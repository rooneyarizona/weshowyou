/**
 * Video genre selection API routing
 */

const express = require('express');
const router = express.Router();
const videoGenreController = require('../controllers/videoGenreController');


router.get('/:videoGenre', videoGenreController.getVideosByGenre);


module.exports = router;

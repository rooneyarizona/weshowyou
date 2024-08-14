/**
 * Videos API routing
 */

const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.post("/", videoController.uploadVideo);
router.get("/", videoController.getVideo)

module.exports = router;


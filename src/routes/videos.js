/**
 * Videos API routing
 */

const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.post("/", videoController.uploadVideo);
router.get("/", videoController.getVideo)
router.delete("/:videoId", videoController.deleteVideo);
router.get("/:videoId", videoController.getVideoById)
  

module.exports = router;


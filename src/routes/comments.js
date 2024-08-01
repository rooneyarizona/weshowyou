//Provides routing based on commentsController functions

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/", commentController.addComment);
router.get("/:videoId", commentController.getCommentsByVideo);
router.get("/", commentController.getAllComments);

module.exports = router;

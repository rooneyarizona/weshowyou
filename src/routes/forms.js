/**
 * User Feedback API routing
 */

const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

router.post("/submitForm", formController.submitForm);
router.get("/", formController.getFeedback)

module.exports = router;

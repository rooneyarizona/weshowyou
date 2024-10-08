
/**
 * Users API routing
 */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
// router.get("/:username", userController.getUserbyUsername);
router.get("/", userController.getUsers);


module.exports = router;


/**
 * Users API routing
 */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/", userController.getUsers);
router.put('/update', userController.updateUserDetails);


module.exports = router;

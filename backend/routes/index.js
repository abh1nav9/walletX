const express = require("express");
const {userSignup, userLogin, userModifyData, getAllUsers} = require("../controllers/user");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

// User Routes
router.get("/bulk", getAllUsers);
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.put("/", authMiddleware, userModifyData);

//Account Routes

module.exports = router;
const express = require("express");
const {userSignup, userLogin, userModifyData} = require("../controllers/user");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

module.exports = router;
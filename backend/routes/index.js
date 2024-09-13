const express = require("express");
const {userSignup, userLogin, userModifyData, getAllUsers} = require("../controllers/user");
const {transferMoney, getBalance} = require("../controllers/account");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

// User Routes
router.get("/bulk", getAllUsers);


router.post("/signup", userSignup);
router.post("/login", userLogin);


router.put("/", authMiddleware, userModifyData);

//Account Routes

router.post("/transfer", authMiddleware, transferMoney);
router.get("/balance", authMiddleware, getBalance);

module.exports = router;
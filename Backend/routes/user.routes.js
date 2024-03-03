const express = require("express");
const { signup, signin, UpdateUser, logOut } = require("../controllers/user.controller.js");
const  VerifyToken  = require("../utils/VerifyToken.js");

const router = express.Router()


router.post('/signup',signup )
router.post('/signin',signin )
router.post('/update/cart',VerifyToken,UpdateUser )
router.get('/logout',logOut )

module.exports = router;
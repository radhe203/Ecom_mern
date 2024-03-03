const express = require("express")
const { AddProduct, RemoveProduct, AllProduct, Userproduct } = require("../controllers/product.controller.js")
const VerifyToken = require("../utils/VerifyToken.js")
const router = express.Router()

router.post('/addproduct',VerifyToken,AddProduct)
router.post('/removeproduct',VerifyToken,RemoveProduct)
router.post('/userproduct',VerifyToken,Userproduct)
router.get('/allproduct',AllProduct)

module.exports = router
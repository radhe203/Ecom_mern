const express = require("express")
const { AddProduct, RemoveProduct, AllProduct } = require("../controllers/product.controller.js")
const router = express.Router()

router.post('/addproduct',AddProduct)
router.post('/removeproduct',RemoveProduct)
router.get('/allproduct',AllProduct)

module.exports = router
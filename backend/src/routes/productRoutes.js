const express = require("express");
const { route } = require("express/lib/router");

const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controllers/productController")

const router = express.Router()

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").get(getProductDetails).put(updateProduct).delete(deleteProduct)



module.exports = router
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const productController = require("../controller/shop");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productController.getProduct);

//admin/products => GET
router.get("/products");

// /admin/add-product => POST
router.post("/add-product", productController.getProduct);

module.exports = router;



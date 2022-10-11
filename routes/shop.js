const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

const getProduct = require('../controller/products')

router.get('/', getProduct.getProduct);

module.exports = router;

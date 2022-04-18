const express = require('express');
const router = express.Router();
const {
    getAllCategories
} = require('../controllers/Categories')

router.get("/",getAllCategories);

module.exports = router
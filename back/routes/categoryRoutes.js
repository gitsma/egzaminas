const express = require('express');
const router = express.Router();

const {
    setCategory,
    getAllCategories
} = require('../controllers/categoryController');

const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.route('/adminpage').post(protectAdmin, setCategory).get(getAllCategories)


module.exports = router
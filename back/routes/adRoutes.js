const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
    getAllAds,
    setAd,
    getUserAds
} = require('../controllers/adController');

router.route('/').get(getAllAds);
router.route('/userpage').post(protect, setAd).get(getUserAds)



module.exports = router
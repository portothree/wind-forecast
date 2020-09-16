const express = require('express');
const ForecastController = require('../controllers/ForecastController');

const router = express.Router();

router.get('/latest', ForecastController.getLatest);

module.exports = router;

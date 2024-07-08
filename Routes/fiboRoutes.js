const express = require('express');
const router = express.Router();
const { getFibonacci } = require('../Controller/fibonacci');

router.get('/test/:memberCount', getFibonacci);

module.exports = router;

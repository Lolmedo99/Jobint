const express = require('express');
const router = express.Router();

const search = require('./search');
const recruiters = require('./recruiter');
const user = require('./user');

router.use('/search', search);
router.use('/recruiter', recruiters);
router.use('/user', user);

module.exports = router;

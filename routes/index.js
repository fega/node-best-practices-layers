const express = require('express');
const users = require('../apiServices/users/routes');

const router = express.Router();

router.use('/users', users);

module.exports = router;

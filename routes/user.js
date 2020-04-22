const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/user')
const { userSingupValidator } = require('../validator')


router.post('/signup', userSingupValidator, signup);

module.exports = router;
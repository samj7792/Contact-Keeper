// Register users

const express = require('express');
const router = express.Router();

// because we are registering new users here we will use a POST request
// anything that goes to api/users will be forwarded to this file so router.post('/', ...) pertains to api/users

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var user = require('../model/userModel.js');

//init db data
user.initusersdb();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi');
});

module.exports = router;

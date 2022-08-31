var express = require('express');
var router = express.Router();

//Datebase
const Database = require("@replit/database");
const db = new Database();

db.set(1, { "name": "Billy" }).then(() => { });

/* GET home page. */
router.get('/', function(req, res, next) {
  db.get(1).then(value => { res.send(value.name) });
});

module.exports = router;
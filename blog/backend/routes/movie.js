var express = require('express');
var router = express.Router();
var movies = require('../movie.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(movies);
});

module.exports = router;

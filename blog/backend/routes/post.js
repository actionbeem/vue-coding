var express = require('express');
var router = express.Router();
var db = require('../lib/db')

router.get('/', function(req, res, next) {
  console.log(db)
  res.send('success');
});

router.post('/create', function(req, res, next) {
  const post = req.body.params;
  db.get('post').push({
    id: 1,
    ...post
  }).write();
  res.send(post);
});

module.exports = router;

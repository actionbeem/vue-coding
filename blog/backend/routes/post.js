const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const shortid = require('shortid');

router.get('/', (req, res, next) =>  {
  const list = db.get('post').value();
  res.send(list);
});

router.post('/create', (req, res, next) => {
  const post = req.body.params;
  db.get('post').push({
    id: shortid.generate(),
    ...post
  }).write();
  res.send(post);
});

module.exports = router;

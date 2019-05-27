const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const shortid = require('shortid');

router.get('/', (req, res, next) =>  {
  const list = db.get('post').value();
  res.send(list);
});

router.post('/write', (req, res, next) => {
  const post = req.body.params;
  db.get('post').push({
    id: shortid.generate(),
    ...post
  }).write();
  res.send(post);
});

router.get('/:pageId', (req, res, next) =>  {
  const postId = req.params.pageId;
  const post = db.get('post').find({id:postId}).value();
  console.log(post)
  res.send(post);
});

module.exports = router;

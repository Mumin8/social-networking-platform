const express = require('express');
const router = express.Router();
const { models } = require('../models');

router.get('/', async (req, res) => {
  const posts = await models.User.findAll()
  res.json(posts);
});

router.get('/:id', async(req, res) =>{
  const id = req.params.id
  const post = await models.User.findByPk(id)
  res.json(post)
})

router.post('/', async (req, res) => {
  const post = await models.User.create(req.body);
  res.json(post);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { models } = require('../models');


router.get('/:userId', async(req, res) =>{
  const userId = req.params.userId
  const comments = await models.Comments.findAll({ where: {userId: userId}})
  res.json(comments)
})

router.post('/', async(req, res) =>{
  const comment = req.body
  await models.Comments.create(comment)
  res.json(comment)
})

module.exports = router;

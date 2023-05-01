const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')

router.get('/:postId', async(req, res) =>{
  const postId = req.params.postId;
  const comments = await Comment.find( {postId: postId})
  res.json(comments)
})

router.post('.', async(req,res) =>{
  const comment = req.body
  await Comment.create(comment)
  res.json(comment)
})
module.exports = router;

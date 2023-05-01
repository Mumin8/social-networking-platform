const express = require('express')
const router = express.Router()
const Post = require('../models/Users')


router.get('/', async (req, res) =>{
  const usrinfo = await Post.find()
    res.json(usrinfo)
})

router.get('/:id', async(req, res) =>{
  try {
  const id = req.params.id
  const user = await Post.findByIdAndUpdate(id, req.body)
  res.json(user)
  if(!user){
      return res.status(404).json({message: 'cannot find any product with ID ${id}'})
    }
    const updatedUser = await Post.findById(id)
    res.status(200).json(updatedUser)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/', async (req, res) =>{
  const data = await Post.create(req.body)
res.json(data)
})

module.exports = router;

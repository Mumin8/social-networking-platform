const express = require('express')
const router = express.Router()
//const models = require('../models')
const Comments  = require('../models')
const { validateToken } = require('../middlewares/AuthenticateMiddleware')

router.get('/:postId', async(req, res)=>{
  try {
    const postId = req.params.postId

    const comments = await Comments.Comments.findAll({ where: { postId: postId } });
    res.json(comments)

  } catch (e) {
    console.log(e)
  }
})

router.post('/', validateToken, async(req, res) => {
  try {
    await Comments.Comments.create(req.body)
    .then((comment)=>{
      res.json(comment)
    })
  } catch (e) {
    console.log(e)
  }


})

module.exports = router

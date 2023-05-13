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
    req.body.username = req.user.username
    console.log(req.user.username)
    await Comments.Comments.create(req.body)
    .then((comment)=>{
      res.json(comment)
    })
  } catch (e) {
    console.log(e)
  }
})

router.delete('/:commentId', validateToken, async(req, res) =>{
  const commentId = req.params.commentId
  await Comments.Comments.destroy({where: {
    id: commentId
  }
})
res.json("deleted")
})

module.exports = router

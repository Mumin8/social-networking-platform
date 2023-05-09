const express = require('express')
const router = express.Router()
//const models = require('../models')
const { Posts } = require('../models')

router.get("/", async(req, res)=>{
  try {
    const posts = await Posts.findAll()
    .then((allPosts)=>{
        res.json(allPosts)
    })
  } catch (error ){
    console.log(error)
  }
})

router.get('/:id', async(req, res)=>{
  try {
    const id = req.params.id

    //const post = await Posts.findByPk(id);
    const post = await Posts.findAll({ where: { id: `${id}` } });
    res.json(post)

  } catch (e) {
    console.log(e)
  }
})

router.post('/', async(req, res) => {
  try {
    const post = await Posts.create(req.body)
    .then((posts)=>{
      res.json(posts)
    })
  } catch (e) {
    console.log(e)
  }


})

module.exports = router

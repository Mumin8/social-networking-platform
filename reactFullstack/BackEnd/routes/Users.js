const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthenticateMiddleware')

router.post('/signup', async(req, res) => {
  try {
  //  const {username, password}  = req.body
    const exists = await Users.findOne({
      where : {
        username: req.body.username
      }
    })
    if(exists) return res.json({val: "this username exist"})
    bcrypt.hash(req.body.password, 10)
    .then((hash) =>{

    Users.create(
        {username: req.body.username,
         password:hash,
       }).then((user)=>{
         res.json({val:"Success"})
       })
     })
   } catch (e) {
    console.log(e)
  }
})

router.post("/login", async(req, res)=>{
  try {
    const user = await Users.findOne(
      {
        where: {
          username: req.body.username
        }
      })
              //implicit return
    if(!user) res.json({error: "user doesnt exist"})

    bcrypt.compare(req.body.password, user.password)
    .then((match) =>{
      if(!match) res.json({error: "wrong username and password combination"})

      const token = jwt.sign({
        username: user.username, id: user.id
      },
      "secretstring"
    )
      res.json({token: token, username: user.username, id: user.id,})
    })
  } catch (error ){
    console.log(error)
  }

})

router.get('/register', validateToken, (req, res) =>{
  res.json(req.user)
})

router.get('/basicinfo/:id', async (req, res)=>{
  const { id } = req.params
  const basicInfo = await Users.findByPk(id, {attributes: {exclude: ['password']},
})
console.log(basicInfo)
res.json( basicInfo)
})
module.exports = router

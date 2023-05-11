const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthenticateMiddleware')

router.post('/signup', async(req, res) => {
  try {
    const {username, password}  = req.body
    bcrypt.hash(password, 10)
    .then((hash) =>{

    Users.create(
        {username: username,
         password:hash,
       }).then((user)=>{
         res.json(user)
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
      res.json(token)
    })
  } catch (error ){
    console.log(error)
  }


})

router.get('/register', validateToken, (req, res) =>{
  res.json(req.user)

})
module.exports = router

const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')

app.use(express.json())
app.use(cors())

const postRouter = require('./routes/Posts')
app.use('/post', postRouter)

const commentsRouter = require('./routes/Comments')
app.use('/comments', commentsRouter)

const usersRouter = require('./routes/Users')
app.use('/register', usersRouter)

db.sequelize.sync()
.then( () =>{
  app.listen(5000, ()=>{
    console.log("connected on port 5000")
  })
})

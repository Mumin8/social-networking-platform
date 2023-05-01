const express = require('express')
const mongoose = require('mongoose');
const Post = require('./models/Users')
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())

const postRouter = require('./routes/posts')
app.use('/post', postRouter)
const commentsRouter = require('./routes/Comments')
app.use('/comment', commentsRouter)


mongoose.connect('mongodb://127.0.0.1:27017/DatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to mongodb!'));
  app.listen(4000, () =>{
    console.log("running ")
  })

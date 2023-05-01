const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors')

app.use(express.json());


//(async () => {
  //await db.sequelize.sync();
//})();

 
app.use(cors())

app.get('/post',(req, res, next)=>{

  console.log('hurray')
  next()
})

const postRouter = require('./routes/Posts')
app.use('/post', postRouter)

const commentsRouter = require('./routes/Comments')
app.use('/comment', commentsRouter)

db.sequelize.sync()
.then(()=>{
  app.listen(4000, () => {
    console.log('connected');
  });
})

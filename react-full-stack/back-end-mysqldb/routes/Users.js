const express = require('express');
const router = express.Router();
const { models } = require('../models');
const bcrypt = require('bcrypt')



router.post('/', async (req, res) => {
  const { username, password } = req.body
  bcrypt.hash(password, 10).then((hash)=>{
    models.userRegForm.create({
      username: username,
      password: hash,
    })
    res.json("success")

  })
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = await models.userRegForm.findAll({ where: { username } });
  if (users.length === 0) {
    return res.json({ error: "User doesn't exist" });
  }

  const user = users.find((user) => bcrypt.compareSync(password, user.password));

  if (!user) {
    return res.json({ error: "Wrong username and password combination" });
  }

  res.json("You are logged in");
});


module.exports = router;

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

  title: String,
  body: String,
  comments: String,
})
const Post = mongoose.model('Post', blogSchema);
module.exports = Post

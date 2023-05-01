const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

  title: String,
  body: String,
  'postId: {
    type: String,
    default: function() {
      return this._id.toString();
    },
    unique: true
  },
  post: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Post'
 }
})
const Comments = mongoose.model('Comment', commentSchema);
module.exports = Comments

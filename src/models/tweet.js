const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
}, { timestamps: true });


const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
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


// vertual schema for with name contentWithEmail and getter function to return the content with the userEmail 
tweetSchema.virtual('contentWithEmail').get(function() {
  return `${this.content} by ${this.userEmail}`;
}); 

// mongoose hooks
tweetSchema.pre('save',function(next){
  console.log('inside hook')
  this.content = this.content + '🔥🔥🔥🔥'
  next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
  content: {
    type: String,
    required: true,
    max:[250,"Tweets cannot be more than 250 chars"]
  },
  hashtags:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Hashtag'
    }
  ]
}, { timestamps: true });

// mongoose hooks
tweetSchema.pre('save',function(next){
  console.log('inside hook')
  this.content = this.content + '🔥🔥🔥🔥'
  next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
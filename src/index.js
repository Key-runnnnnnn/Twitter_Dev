const express = require('express');
const app = express();  // create an express app
const connect = require('./config/database')
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository')

app.listen(3000, async (req, res) => {
  await connect();
  console.log('Database connected');

  const tweetRepo = new TweetRepository();
  const tweet  = await tweetRepo.getWithComment('6672cb9fea0ff0d4151007ab')
  console.log(tweet);
});
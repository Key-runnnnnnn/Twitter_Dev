const express = require('express');
const app = express();  // create an express app
const connect = require('./config/database')
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository')

app.listen(3000, async (req, res) => {
  await connect();
  console.log('Database connected');

  const tweetRepo = new TweetRepository();
  // const tweets = await tweetRepo.getAll(0, 10);
  // console.log(tweets);
  const tweets = await tweetRepo.create({ content: 'Say thanks to Google', userEmail: 'google.com' })
  const comments = await Comment.create({ content: 'Great work by google' });
  // insert the comment into array

  tweets.comments.push(comments);
  console.log(tweets);
});

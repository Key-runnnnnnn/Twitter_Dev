const { TweetRepository } = require('../repository/index')

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    this.content = data.content
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // This regex extract hashtags from string
    tags = tags.map((tag) => tag.substring(1));// this removes the # present before the string
    console.log(tags);
    const tweet = await this.tweetRepository.create(data)
    return tweet;
  }
}

module.exports = TweetService;

/*
This is my #first #tweet. I'm really #excited 
*/
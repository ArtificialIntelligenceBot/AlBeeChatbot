var express = require('express');
var router = express.Router();

// Twitter 11/24/2017
var Twitter = require('twitter');
var twitter_config = require('../config/twitter_config.js');
var T = new Twitter(twitter_config);

// Set up your search parameters
var params = {screen_name: 'maxtsai', count: '1'};

/* GET home page. */
router.get('/', function(req, res, next) {

  var Tweets;

  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.parse(JSON.stringify(tweets))[0].text);
      Tweets = "Max's Tweet: " + JSON.parse(JSON.stringify(tweets))[0].text;

      res.render('index', {
        title: 'AlBeeChatbot',
        messageoftheday: Tweets
      });

    }
  });

});

module.exports = router;

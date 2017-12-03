var express = require('express');
var router = express.Router();

// Twitter 11/24/2017
var Twitter = require('twitter');
var twitter_config = require('../config/twitter_config.js');
var T = new Twitter(twitter_config);

// Set up your search parameters
var params = {screen_name: 'maxtsai', count: '1'};

/* GET default Bot */
router.get('/', function(req, res, next) {

  var Tweets;

  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.parse(JSON.stringify(tweets))[0].text);
      Tweets = "MOTD (Max's Tweet): " + JSON.parse(JSON.stringify(tweets))[0].text;

      res.render('index-diagflow', {
        title: 'AlBeeChatbot',
        messageoftheday: Tweets
      });

    }
  });

});

/* GET home page with bot - Diagflow. */
router.get('/bot/diagflow', function(req, res, next) {

  var Tweets;

  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.parse(JSON.stringify(tweets))[0].text);
      Tweets = "MOTD (Max's Tweet): " + JSON.parse(JSON.stringify(tweets))[0].text;

      res.render('index-diagflow', {
        title: 'AlBeeChatbot',
        messageoftheday: Tweets
      });

    }
  });
});

/* GET home page with bot - Lex. */
router.get('/bot/lex', function(req, res, next) {

  var Tweets;

  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.parse(JSON.stringify(tweets))[0].text);
      Tweets = "MOTD (Max's Tweet): " + JSON.parse(JSON.stringify(tweets))[0].text;

      res.render('index-lex', {
        title: 'AlBeeChatbot',
        messageoftheday: Tweets
      });

    }
  });
});

module.exports = router;

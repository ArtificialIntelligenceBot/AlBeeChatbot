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
      // Tweets = "MOTD (Max's Tweet): " + JSON.parse(JSON.stringify(tweets))[0].text;

      Tweets = '<h2>This is a BotOfBots</h2> You can connect to <a href="/bot/lex"> AWS Lex Bot </a> or <a href="/bot/DialogFlow"> Google DialogFlow bot</a><br/>'

      res.render('index-dialogflow', {
        title: 'AlBeeChatbot',
        messageoftheday: Tweets
      });

    }
  });

});

/* GET home page with bot - Diagflow. */
router.get('/bot/dialogflow', function(req, res, next) {

  var Tweets;

  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.parse(JSON.stringify(tweets))[0].text);
      Tweets = "MOTD (Max's Tweet): " + JSON.parse(JSON.stringify(tweets))[0].text;

      res.render('index-dialogflow', {
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

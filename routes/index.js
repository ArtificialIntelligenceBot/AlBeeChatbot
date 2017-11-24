var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', {
    title: 'AlBeeChatbot',
    messageoftheday: 'Weclome to AlBee Chatbot - your Smart Virtual Assistant!'
  });

});

module.exports = router;

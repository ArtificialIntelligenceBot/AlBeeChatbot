var express = require('express');
var router = express.Router();

/* GET Main page. */
router.get('/', function(req, res, next) {

  res.render('embed', {
    title: 'AlBeeChatbot',
    messageoftheday: 'Weclome to AlBee Chatbot - your Smart Virtual Assistant!'
  });

});

/* GET Example page. */
router.get('/Example', function(req, res, next) {

  res.render('embedExample', {
    title: 'AlBeeChatbot',
    messageoftheday: 'Weclome to AlBee Chatbot - your Smart Virtual Assistant!'
  });

});

module.exports = router;

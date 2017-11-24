var express = require('express');
var router = express.Router();

/* GET Main page. */
router.get('/', function(req, res, next) {

  res.render('embed', {
    title: 'AlBeeChatbot Embed Example',
    messageoftheday: 'Weclome to AlBee Chatbot - your Smart Virtual Assistant!'
  });

});

module.exports = router;

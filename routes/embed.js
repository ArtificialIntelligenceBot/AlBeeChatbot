var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Example', function(req, res, next) {


  res.render('embedExample', {
    title: 'AlBeeChatbot',
    messageoftheday: 'Weclome to AlBee Chatbot - your Smart Virtual Assistant!'
  });

});

module.exports = router;

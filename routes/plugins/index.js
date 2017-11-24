var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('plugins/index', {
    title: 'AlBeeChatbot',
    messageoftheday: 'AlBee Chatbot - Plugins'
  });

});

module.exports = router;

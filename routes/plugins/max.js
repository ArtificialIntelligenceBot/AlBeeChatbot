var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // 11-24-2017 Test sqlite3
  var sqlite3 = require('sqlite3').verbose()
  var db = new sqlite3.Database('./data/albeechatbot.database')

  db.serialize(function () {
    db.run('CREATE TABLE maxtest (info TEXT)')
    var stmt = db.prepare('INSERT INTO maxtest VALUES (?)')

    for (var i = 0; i < 10; i++) {
      stmt.run('maxtest ' + i)
    }

    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM maxtest', function (err, row) {
      console.log(row.id + ': ' + row.info)
    })
  })

  db.close()


  res.render('plugins/max', {
    title: 'AlBeeChatbot',
    messageoftheday: 'Weclome to AlBee Chatbot - your Smart Virtual Assistant!'
  });

});

module.exports = router;

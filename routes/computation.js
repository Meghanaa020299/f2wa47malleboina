var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var a = Math.acosh(x);
    var b = Math.log1p(x);
    var c = Math.tan(x);
    var d = Math.sqrt(x);
  res.render('computation', { title: 'My Bonus', x:x, a:a, b:b, c:c, d:d });
});

module.exports = router;

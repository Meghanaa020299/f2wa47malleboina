var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random() * 15;
  res.send(`Math.tan() applied to ${random} is ${Math.tan(random)}`);
});

router.get('/:id', function(req, res, next) {
  res.send(`Math.tan() applied to ${req.params.id} is ${Math.tan(req.params.id)}`);
});



module.exports = router;

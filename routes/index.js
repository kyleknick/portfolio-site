var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Kyle Knickerbocker' });
});

module.exports = router;

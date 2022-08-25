var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'server test' });
});

module.exports = router;

// get 코드 추가
router.get('/api/get/test', function(req, res, next) {
  res.status(200).json({
    "message" : "api get 동작 테스트 화면"
  });  
});

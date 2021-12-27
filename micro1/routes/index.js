"use strict"
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', null);
});
router.post('/api/getAppInfo', function(req, res, next) {
	console.log('--------------------body ',req.body);
	res.send({ success:true, message:"", data: { appName: 'micro1' } });
});

module.exports = router;

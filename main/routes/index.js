"use strict"
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', null);
});
router.get('/api/getAppInfo', function(req, res, next) {
	console.log('--------------------body ',req.body);
	res.send({ success:true, message:"", data: { appName: 'main' } });
});
module.exports = router;

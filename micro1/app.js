"use strict"
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(function(req, res, next) {
	// 设置所有HTTP请求的超时时间 120s
	req.setTimeout(120*1000);
	next();
});

app.use('/', indexRouter);

//重启操作记录
global.RequestLog = [];
// module.exports = app;
app.listen(8001,function () {
	console.log('-------------listen ',8001);
});

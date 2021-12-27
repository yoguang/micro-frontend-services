"use strict"
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');

var app = express();

// 单页应用刷新页面路由匹配不到处理
app.use(history({
  rewrites: [
    { from: /\/web/, to: '/index.html'}
  ]
}));

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

// module.exports = app;
app.listen(8000, function () {
	console.log('-------------listen ', 8000);
});

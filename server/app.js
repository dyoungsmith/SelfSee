'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var selfieRouter = require('./routes/selfie-router.js');
var emoRouter = require('./routes/emotion-router.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sub-routers!
app.use('/selfies', selfieRouter);
app.use('/emotions', emoRouter);

app.use(function(err, req, res, next) {
	console.error(err, err.stack);
	res.status(500).send(err);
});


module.exports = app;
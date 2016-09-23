'use strict';

var db = require('./_db.js');
var chalk = require('chalk');

var Selfie = require('./selfie-model.js');
var Emotion = require('./emotion-model.js');

Emotion.belongsTo(Selfie);
Selfie.hasOne(Emotion);


module.exports = db;